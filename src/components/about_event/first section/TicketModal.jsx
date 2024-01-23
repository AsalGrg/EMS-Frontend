import { Modal, ScrollArea } from "@mantine/core";
import React from "react";

const TicketModal = ({ opened, close }) => {
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
