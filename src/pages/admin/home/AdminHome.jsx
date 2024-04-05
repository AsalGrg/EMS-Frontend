import { Avatar, Text } from "@mantine/core";
import React from "react";
import EventCreationOptions from "../../../components/vendor/home/EventCreationOptions";

const AdminHome = () => {
  return (
    <div className="fonts">
      <div className="border py-4 px-4">
        <h1 className="display-6 fw-bold">Goodmorning, Asal</h1>
        <Text fs={"italic"} size="md">
          Mar 20, 2024
        </Text>
      </div>

      <div className="mt-5 container row justify-content-evenly">
        <div className="border col-6 mb-4 d-flex justify-content-center align-items-center flex-column">
          <Avatar variant="transparent" radius="sm" size="xl" src="" />

          <Text size="xl" fw={600}>
            Asal Gurung
          </Text>

          <div className="d-flex justify-content-evenly w-50">
            <div className="text-center">
              <Text fw={600} size="md">
                1000
              </Text>
              <Text fw={500} size="sm" c="dimmed">
                Events
              </Text>
            </div>

            <div className="text-center">
              <Text fw={600} size="md">
                --
              </Text>
              <Text fw={500} size="sm" c="dimmed">
                Followers
              </Text>
            </div>

          </div>

          <div className="d-flex justify-content-evenly w-100">
            <p className="btn-link">Edit</p>
            <p className="btn-link">Profile</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
