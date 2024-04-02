import { Menu, Progress, Text, rem } from "@mantine/core";
import { IconDotsVertical, IconSearch } from "@tabler/icons-react";
import React from "react";
import EventActions from "./EventActions";
import { useNavigate } from "react-router-dom";
import formatDate from "../../utilities/formatDate";
import formatTime from "../../utilities/formatTime";
import capitalizeWord from "../../utilities/capitalizeWord";

const EachEvent = ({ event }) => {

  const formattedDate = formatDate(event.startDate);
  const formattedTime = formatTime(event.startTime);

  const fractionPercentage = (event.ticketsSold / event.ticketsForSale) * 100;
  const percentCode = Math.round(fractionPercentage);


  console.log(percentCode )
  const navigate = useNavigate();

  return (
    <tr
      className="eachEventRow border-bottom"
      onClick={() => {
        navigate(`/vendor/myEvent/${event.eventId}`);
      }}
    >
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
          <Text>{event.ticketsSold}/{event.ticketsForSale}</Text>
          <Progress size="md" value={percentCode} 
          color="green"
          />
        </div>
      </td>

      <td>
        <Text>Rs 0.00</Text>
      </td>

      <td className="d-none d-xl-table-cell mt-3">
        {capitalizeWord(event.eventStatus)}
      </td>

      <td>
        <Menu shadow="md" width={200} position="left" withArrow>
          <Menu.Target>
            <IconDotsVertical className="" />
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Label>Actions</Menu.Label>

            <EventActions />
          </Menu.Dropdown>
        </Menu>
      </td>
    </tr>
  );
};

export default EachEvent;
