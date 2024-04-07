import { Text, Title, rem } from "@mantine/core";
import { IconReceiptOff } from "@tabler/icons-react";
import React from "react";

const NoOrders = ({ message }) => {
  const iconStyle = {
    height: rem(100),
    width: rem(100),
  };
  return (
    <div
      className="w-100 d-flex justify-content-center align-items-center flex-column gap-2"
      style={{
        minHeight: "200px",
      }}
    >
      <div
        style={{
          height: "100px",
          width: "100px",
        }}
      >
        <img src="/no-orders.png" />
      </div>

      <Title order={3} c={'dimmed'} className="mt-2">{message}</Title>
    </div>
  );
};

export default NoOrders;
