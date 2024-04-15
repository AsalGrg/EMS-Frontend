import { Burger, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import { useNavigate } from "react-router";

const Navlinks = ({loggedData}) => {

  const navigate = useNavigate();

  return (
    <>
      <div className="col-5 justify-content-start gap-4 align-items-center d-none d-lg-flex">
        <Text size="md" fw={500}
        onClick={() => {
          if(loggedData!==null){
              return navigate("/c/create/new");
            }else{
              return navigate("/login");
            }
          }
        }
        >
          Create Event
        </Text>

        <Text size="md" fw={500}
        
        >
          Find Vendor
        </Text>

        <Text size="md" fw={500}
        onClick={() => {
          return navigate("/search");
        }}
        >
          Browse Event
        </Text>
      </div>
    </>
  );
};

export default Navlinks;
