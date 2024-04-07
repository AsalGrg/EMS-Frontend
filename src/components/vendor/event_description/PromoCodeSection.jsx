import { Text } from "@mantine/core";
import React, { useState } from "react";
import EventPromoCodesTable from "../EventPromoCodesTable";
import PromoCodeModal from "./PromoCodeModal";
import { useDisclosure } from "@mantine/hooks";

const PromoCodeSection = () => {

    const [opened, { open, close }] = useDisclosure(false);

  return (
    <div className="mt-5 row">
      <div className="col-12 col-lg-11 d-flex justify-content-between align-items-center">
        <Text size="xl" fw={600}>
          Promo codes
        </Text>

        <button className="dashboard-btn"
        onClick={open}
        >Add promo code</button>
      </div>

      <div className="row mt-4">
        <div className="col-12 col-lg-12">
          <EventPromoCodesTable />
        </div>
      </div>

    <PromoCodeModal
    close={close}
    opened={opened}
    />

    </div>
  );
};

export default PromoCodeSection;
