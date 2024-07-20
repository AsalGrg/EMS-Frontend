import { Avatar, Text } from "@mantine/core";
import React from "react";
import { useNavigate } from "react-router";

const ProfileSnippet = ({userDetails}) => {

  const navigate = useNavigate();
  return (
    <div className="mt-5 container row justify-content-evenly">
      <div className="border col-6 mb-4 d-flex justify-content-center align-items-center flex-column">
        <Avatar variant="transparent" size="lg" src={userDetails.userDp} />

        <Text size="xl" fw={600}>
          {userDetails.username}
        </Text>

        {/* <div className="d-flex justify-content-evenly w-50">
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
        </div> */}

        <div className="d-flex justify-content-evenly w-100">
          <p className="btn-link"
          onClick={()=> navigate('/user/profile/me')}
          >Edit</p>
          <p className="btn-link"
          onClick={()=> navigate('/editProfile')}
          >Profile</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileSnippet;
