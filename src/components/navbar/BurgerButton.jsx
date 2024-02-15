import { Burger, Menu, Modal, Text, rem } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconSearch } from "@tabler/icons-react";
import React from "react";

const BurgerButton = () => {
  const [opened, { open, close, toggle }] = useDisclosure();

  return (
    <section className="d-block d-lg-none w-100">
      <Burger opened={opened} onClick={toggle} aria-label="Toggle navigation" />

      <Modal
        zIndex={10000}
        opened={opened}
        onClose={close}
        withCloseButton={false}
        yOffset="19vh"
        size="100%"
        overlayProps={{
          backgroundOpacity: 0,
        }}
      >
        <div className="ms-3 d-flex flex-column gap-4">
          <Text size="lg" fw={600}>Create Event</Text>

          <Text size="lg" fw={600}>Find Vendor</Text>

          <Text size="lg" fw={600}>Browse Event</Text>

          <Text size="lg" fw={600}>Login</Text>
        </div>
      </Modal>
    </section>
  );
};

export default BurgerButton;
