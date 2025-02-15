import React, { useState } from "react";
import UserImages from "./UserImages";
import { Button, Text } from "@mantine/core";
import UserActionButtons from "../../utilities/userActionButtons";
import { useDispatch, useSelector } from "react-redux";

const IntroSection = () => {
  const userData = useSelector((state) => state.userProfile);
  const [isFollowing, setisFollowing] = useState(false);

  function handleFollowingBtn() {
    setisFollowing((prev) => !prev);
  }
  return (
    <section>
      <UserImages />

      <div
        className="row justify-content-center"
        style={{
          marginTop: "50px",
        }}
      >
        <div className="col-10 col-md-6 text-center">
          <Text size="xl" fw={700}>
            {userData.userSnippetDetails.username}
          </Text>

          <Text size="md" fw={500}>
            {userData.userSnippetDetails.userIntro}
          </Text>
        </div>

        <div className="col-md-7 col-8 mt-4 px-5 ">
          <div className="d-flex justify-content-center flex-column flex-lg-row">
            <div className="d-flex justify-content-evenly me-lg-3">
              <div className=" mb-xl-0 mb-3 border-end border-2 pe-2 me-lg-4">
                <Text size="sm" fw={700}>
                  1900
                </Text>
                <Text size="xs" fw={500}>
                  Followers
                </Text>
              </div>

              <div className=" mb-xl-0 mb-3 border-end border-2 pe-2">
                <Text size="sm" fw={700}>
                  {userData.noOfEvents}
                </Text>
                <Text size="xs" fw={500}>
                  Events
                </Text>
              </div>
            </div>

            <UserActionButtons
              isFollowing={isFollowing}
              followBtnHandler={handleFollowingBtn}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
