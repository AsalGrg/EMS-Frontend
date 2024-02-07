import { Affix, Button, Modal, rem } from "@mantine/core";
import React from "react";
import FiltersLargeScreen from "../filters/FiltersLargeScreen";
import ModalTitle from "./ModalTitle";
import { IconArrowUp } from "@tabler/icons-react";

const FiltersModal = ({ opened, close }) => {
  return (
    <Modal
      opened={opened}
      onClose={close}
      title={<ModalTitle />}
      fullScreen
      zIndex={10000}
      radius={0}
      transitionProps={{ transition: "fade", duration: 200 }}
    >
      <FiltersLargeScreen />

      <Affix
      position={{bottom: 5}}
      className="w-100 d-flex justify-content-center px-3"
      zIndex={10000}>
        <Button
        className="w-100"

        onClick={close}
          leftSection={
            <IconArrowUp style={{ width: rem(16), height: rem(16) }} />
          }      
           >
          View Results
        </Button>
      </Affix>
    </Modal>
  );
};

export default FiltersModal;
