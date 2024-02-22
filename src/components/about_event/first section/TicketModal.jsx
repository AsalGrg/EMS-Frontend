import { Modal, ScrollArea } from "@mantine/core";
import React from "react";
import { useSelector } from "react-redux";

const TicketModal = ({ opened, close }) => {

  const ticketData= useSelector(state=> state.aboutEvent)


  return (
    <Modal
      opened={opened}
      onClose={close}
      title="Authentication"
      scrollAreaComponent={ScrollArea.Autosize}
      centered
    >
      {/* Modal content */}
    </Modal>
  );
};

export default TicketModal;
