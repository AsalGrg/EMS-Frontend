import { Modal } from "@mantine/core";
import React from "react";
import FiltersLargeScreen from "../filters/FiltersLargeScreen";

const FiltersModal = ({opened, close}) => {
  return (
    <Modal
      opened={opened}
      onClose={close}
      title="This is a fullscreen modal"
      fullScreen
      zIndex={10000}
      radius={0}
      transitionProps={{ transition: "fade", duration: 200 }}
    >
      <FiltersLargeScreen/>
    </Modal>
  );
};

export default FiltersModal;
