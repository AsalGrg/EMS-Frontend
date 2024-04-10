import { Text } from "@mantine/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const AboutUser = () => {

  const userData = useSelector((state) => state.userProfile);


  return (
    <div className="col-9">
      <Text size="xl" fw={700}>
        About
      </Text>
      <Text>
      {userData.userSnippetDetails.userBio}
      </Text>
    </div>
  );
};

export default AboutUser;
