import { useDisclosure } from "@mantine/hooks";
import React from "react";
import TicketModal from "./TicketModal";
import { IconHeart, IconShare2 } from "@tabler/icons-react";
import { Button } from "@mantine/core";

const TicketSection = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <section>

        <TicketModal opened={opened} close={close}/>

        {/* share and like icons */}
        <div className="d-flex justify-content-end">
            <IconHeart size={20} className="me-4"/>
            <IconShare2 size={20}/>
        </div>

        <div className="border rounded py-3 px-4 mt-5">
            <p className="text-center text-secondary fw-bold mb-4 lead">Ticket Price</p>
            <Button variant="filled"  color="rgba(300, 118, 0, 1)" fullWidth
            size="md"
            onClick={open}>Buy Tickets</Button>
        </div>
    </section>
  );
};

export default TicketSection;
