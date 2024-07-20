import { Avatar, Text } from "@mantine/core";
import React, { useEffect, useState } from "react";
import EventCreationOptions from "../../../components/vendor/home/EventCreationOptions";
import ProfileSnippet from "../../../components/vendor/home/ProfileSnippet";
import formatDate from "../../../components/utilities/formatDate";
import { get_user_data } from "../../../services/check loggedIn/get_user_data";

const VendorHome = () => {
  const [userDetails, setuserDetails] = useState(null);
  const currentDate = new Date();
  const hours = currentDate.getHours();
  let greeting;

  if (hours < 12) {
    greeting = "Good morning";
  } else if (hours >= 12 && hours < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  useEffect(() => {
    const fetchData = async () => {
      const res = await get_user_data();

      if ((res.status = 200)) {
        setuserDetails(res.data);
        console.log(res.data);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {userDetails && (
        <>
          <div className="border py-4 px-4">
            <h1 className="display-6 fw-bold">{greeting}, {userDetails.username}</h1>
            <Text fs={"italic"} size="md">
              {formatDate(currentDate)}
            </Text>
          </div>

          <ProfileSnippet userDetails={userDetails}/>

          {/* <EventCreationOptions /> */}
        </>
      )}
    </div>
  );
};

export default VendorHome;
