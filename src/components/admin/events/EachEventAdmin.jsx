import { Button, Menu, Progress, Text, rem } from "@mantine/core";
import {
  IconCheck,
  IconCircleX,
  IconDotsVertical,
  IconLayersSubtract,
  IconSearch,
} from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import EventActions from "./EventActionsAdmin";
import { useNavigate } from "react-router-dom";
import formatDate from "../../utilities/formatDate";
import formatTime from "../../utilities/formatTime";
import capitalizeWord from "../../utilities/capitalizeWord";
import { Box, Modal, Typography } from "@mui/material";
import get_all_collections from "../../../services/user/get_all_collections";
import add_event_to_collection from "../../../services/user/add_event_to_collection";
import { ToastContainer, toast } from "react-toastify";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 980,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const EachEventAdmin = ({ event }) => {
  const [collections, setcollections] = useState([]);
  const [selectedCollection, setselectedCollection] = useState(null);


  const formattedDate = formatDate(event.startDate);
  const formattedTime = formatTime(event.startTime);

  const fractionPercentage = (event.ticketsSold / event.ticketsForSale) * 100;
  const percentCode = Math.round(fractionPercentage);

  const [opened, setopened] = useState(false);

  const [openCollection, setOpenCollection] = React.useState(false);
  const handleOpen = () => setOpenCollection(true);
  const handleClose = () => setOpenCollection(false);

  console.log(percentCode);
  const navigate = useNavigate();

  useEffect(() => {
    async function getAllCollections() {
      const res = await get_all_collections();

      if (res.ok) {
        const data = await res.json();
        setcollections(data);
      }
    }

    getAllCollections();
  }, []);

  function handleSelectCollection(collection) {
    setselectedCollection(collection);
  }

  async function handleAddEventToCollection(){
    const res= await add_event_to_collection(selectedCollection.id, event.eventId)

    if(res.ok){
      toast.success('Event added to collection')
      handleClose();
    }
    else{
      const data = await res.json();
      toast.error(data.message);
    }
  }

  return (
    <>
      <tr className="eachEventRow border-bottom">
        <td>
          <div className="d-flex gap-3">
            <div className="text-center">
              <Text c={"red"}>{formattedDate.substring(0, 3)}</Text>
              <Text c={"dimmed"} size="lg" fw={500}>
                {formattedDate.substring(4, 6)}
              </Text>
            </div>

            <div className="eachEventRow-img-div">
              <img
                src={event.eventCoverImgUrl}
                className="w-100 h-100"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>

            <div className="d-flex justify-content-center flex-column gap-1">
              <Text size="md">{event.eventName}</Text>

              <Text size="xs" c={"dimmed"} fw={500}>
                {formatDate(event.startDate)}, {formatTime(event.startTime)}
              </Text>
            </div>
          </div>
        </td>

        <td>
          <div className="d-flex flex-column gap-2">
            <Text>
              {event.ticketsSold}/{event.ticketsForSale}
            </Text>
            <Progress size="md" value={percentCode} color="green" />
          </div>
        </td>

        <td>
          <Text>Rs 0.00</Text>
        </td>

        <td className="d-none d-xl-table-cell mt-3">
          {capitalizeWord(event.eventStatus)}
        </td>

        <td>
          <Button
            color="dark"
            variant={"outline"}
            size="xs"
            leftSection={
              <IconLayersSubtract
                style={{ height: rem(18), width: rem(18) }}
                color="green"
              />
            }
            onClick={handleOpen}
          >
            Collect to
          </Button>
          <Menu
            shadow="md"
            width={200}
            position="left"
            withArrow
            opened={opened}
            onChange={setopened}
          >
            <Menu.Target
              onClick={(e) => {
                e.stopPropagation();
                setopened((prev) => !prev);
              }}
            >
              <IconDotsVertical className="" />
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Label>Actions</Menu.Label>

              <EventActions event={event} />
            </Menu.Dropdown>
          </Menu>
        </td>
      </tr>

      <Modal
        open={openCollection}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Collections
          </Typography>

          <div className="d-flex gap-5 flex-wrap">
            {collections.map((each) => (
              <div
                className="rounded mt-4 border cursor-pointer position-relative"
                style={{
                  height: "300px",
                  width: "270px",
                }}
                onClick={() => handleSelectCollection(each)}
              >
                <div className="h-50">
                  <img
                    src={each.coverImg}
                    className="w-100 h-100"
                    style={{
                      objectFit: "cover",
                    }}
                  ></img>
                </div>

                <div className="h-50 px-2 mt-2 d-flex flex-column gap-3">
                  <Text size="md" fw={"600"} lineClamp={2}>
                    {each.collectionName}
                  </Text>

                  <Text size="sm" c={"dimmed"} lineClamp={3} fs={"italic"}>
                    {each.description}
                  </Text>
                </div>

                {selectedCollection === each ? (
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-success">
                    <IconCheck
                      style={{ height: rem(18), width: rem(18) }}
                      color="white"
                    />
                  </span>
                ) : null}
              </div>
            ))}
          </div>

          <div className="d-flex justify-content-end mt-3">
            <Button
              color="dark"
              variant={"outline"}
              size="md"
              disabled={selectedCollection === null}
              onClick={handleAddEventToCollection}
            >
              Add
            </Button>
          </div>
        </Box>
      </Modal>

      <ToastContainer/>
    </>
  );
};

export default EachEventAdmin;
