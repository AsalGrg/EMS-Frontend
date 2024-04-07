import { Divider, Menu, Text, rem } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import React from "react";
import { useNavigate } from "react-router";

const EventActions = ({event}) => {
  
  const navigate = useNavigate();

  function handleNavigate(e, link){
    console.log("link"+ link);
    e.stopPropagation();
    return navigate(link);
  }
  return (
    <>
      <Menu.Item
      onClick={(e)=> handleNavigate(e, '/c/create/new')}
      >
        <Text>View</Text>
      </Menu.Item>

      <Menu.Item
        onClick={(e)=> handleNavigate(e, '/c/edit/'+event.eventId)}
      >
        <Text>Edit</Text>
      </Menu.Item>

      <Menu.Item>
        <Text>Copy Link</Text>
      </Menu.Item>

      <Divider/>
      
      <Menu.Item>
        <Text c={"red"}>Delete</Text>
      </Menu.Item>
    </>
  );
};

export default EventActions;
