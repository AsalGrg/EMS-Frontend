import { Divider, Menu, Text, rem } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconSearch } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Modal from '@mui/material/Modal';

const EventActionsAdmin = ({ event }) => {
  const [openedCollection, setOpenCollection] = useState(false);
  const handleOpen = () => setOpenCollection(true);
  const handleClose = () => setOpenCollection(false);

  const [collections, setCollections] = useState([]);

  const navigate = useNavigate();

  function handleNavigate(e, link) {
    console.log("link" + link);
    e.stopPropagation();
    return navigate(link);
  }

  useEffect(() => {
    function getAllCollections() {}
    getAllCollections();
  }, []);

  return (
    <>
       <Modal
        open={openedCollection}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <p>Bello</p>
      </Modal>

      <Menu.Item onClick={(e) => handleNavigate(e, "/c/create/new")}>
        <Text>View</Text>
      </Menu.Item>

      <Menu.Item>
        <Text>Copy Link</Text>
      </Menu.Item>

      <Menu.Item onClick={handleOpen}>
        <Text>Add to collection</Text>
      </Menu.Item>

      <Divider />

      <Menu.Item>
        <Text c={"red"}>Delete</Text>
      </Menu.Item>
    </>
  );
};

export default EventActionsAdmin;
