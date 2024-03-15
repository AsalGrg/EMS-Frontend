import { Menu, Progress, Text, rem } from "@mantine/core";
import { IconDotsVertical, IconSearch } from "@tabler/icons-react";
import React from "react";
import EventActions from "./EventActions";
import { Link, useNavigate } from "react-router-dom";

const EachEvent = () => {

  const navigate = useNavigate();


  return (
      <tr className="eachEventRow border-bottom"
      onClick={()=>{
        navigate("/vendor/myEvent")
      }}
      >
        <td>
          <div className="d-flex gap-3">
            <div className="text-center">
              <Text c={"red"}>JAN</Text>
              <Text c={"dimmed"} size="lg" fw={500}>
                25
              </Text>
            </div>

            <div className="eachEventRow-img-div">
              <img
                src="https://th.bing.com/th/id/OIP.ph8W0u1qki9jXXLIyKOgpwHaE8?rs=1&pid=ImgDetMain"
                className="w-100 h-100"
              />
            </div>

            <div className="d-flex justify-content-center flex-column gap-1">
              <Text size="md">Event Name</Text>

              <Text size="xs" c={"dimmed"} fw={500}>
                Mon Jan 22,2024 at 7:00pm
              </Text>
            </div>
          </div>
        </td>

        <td>
          <div className="d-flex flex-column gap-2">
            <Text>0/0</Text>
            <Progress size="md" value={0} />
          </div>
        </td>

        <td>
          <Text>Rs 0.00</Text>
        </td>

        <td className="d-none d-xl-table-cell mt-3">Draft</td>

        <td>
          <Menu shadow="md" width={200} position="left" withArrow>
            <Menu.Target>
              <IconDotsVertical className="" />
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Label>Actions</Menu.Label>

              <EventActions />
            </Menu.Dropdown>
          </Menu>
        </td>
      </tr>
  );
};

export default EachEvent;
