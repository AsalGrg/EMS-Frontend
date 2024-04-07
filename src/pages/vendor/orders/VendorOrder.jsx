import { Input, Select, rem } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import EventOrdersTable from "../../../components/vendor/EventOrdersTable";
import get_all_vendor_orders from "../../../services/user/get_all_vendor_orders";

const VendorOrder = () => {

  const [orders, setorders] = useState([])
  const iconStyle = {
    height: rem(20),
    width: rem(20),
  };

  useEffect(() => {
    async function getAllVendorOrders (){
      const res = await get_all_vendor_orders();
      if(res.ok){
        const data = await res.json();
        setorders(data);
      }
    }
    getAllVendorOrders();
  }, [])
  

  return (
    <div className="p-5">
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
            <EventOrdersTable orders={orders}/>
        </div>
      </div>
    </div>
  );
};

export default VendorOrder;
