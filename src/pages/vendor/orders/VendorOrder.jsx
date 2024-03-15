import { Input, Select, rem } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import React from "react";
import EventOrdersTable from "../../../components/vendor/EventOrdersTable";

const VendorOrder = () => {
  const iconStyle = {
    height: rem(20),
    width: rem(20),
  };
  return (
    <div>
      <h1 className="display-6 fw-bold">Orders</h1>

      <div className="row mt-4">
        <Input
          placeholder="Search order number, email or name"
          leftSection={<IconSearch style={iconStyle} />}
          className="col-5 ps-1"
          size="md"
        />

        <Select
          placeholder="Select date range"
          data={["Past 3 months", "Past 6 months", "Past 12 months"]}
          className="col-3 ps-1"
          size="md"
        />
      </div>

      <div className="mt-4 w-100 row">
        <div className="col-lg-11 col-12">
            <EventOrdersTable/>
        </div>
      </div>
    </div>
  );
};

export default VendorOrder;
