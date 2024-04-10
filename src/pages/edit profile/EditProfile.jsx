import { Tabs } from "@mantine/core";
import React from "react";
import EditBasicDetails from "../../components/edit profile/edit basic details/EditBasicDetails";
import ChangePassword from "../../components/edit profile/change password/ChangePassword";
import get_edit_profile_details from "../../services/user/get_edit_profile_details";

const EditProfile = () => {
  
  document.title= 'Edit Profile';
  return (
    <div className="px-2 ">
      <Tabs
        defaultValue="gallery"
        orientation="vertical"
      >
        <Tabs.List
          className="h-100"
          style={{
            width: "200px",
          }}
        >
          <Tabs.Tab value="gallery" className="px-3 my-2">Basic details</Tabs.Tab>
          <Tabs.Tab value="messages" className="px-3 my-2">Change Password</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="gallery" className=""
        >
          <EditBasicDetails />
        </Tabs.Panel>
        <Tabs.Panel value="messages"><ChangePassword/></Tabs.Panel>
      </Tabs>
    </div>
  );
};

export default EditProfile;

