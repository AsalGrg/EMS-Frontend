import { Modal, ScrollArea } from "@mantine/core";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import TicketModalTitle from "./TicketModalTitle";
import TicketModalContent from "./TicketModalContent";

const TicketModal = ({ opened, close }) => {

  const ticketData= useSelector(state=> state.aboutEvent)

  return (
    <Modal
      opened={opened}
      size={'1000px'}
      onClose={close}
      title={<TicketModalTitle/>}
      scrollAreaComponent={ScrollArea.Autosize}
      centered
    >
      <TicketModalContent/>
    </Modal>
  );
};

export default TicketModal;
