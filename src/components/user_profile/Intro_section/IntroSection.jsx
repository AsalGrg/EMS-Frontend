import React, { useState } from "react";
import UserImages from "./UserImages";
import { Button, Text } from "@mantine/core";
import UserActionButtons from "../../utilities/userActionButtons";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

const IntroSection = () => {
  const userData = useSelector((state) => state.userProfile);
  const [isFollowing, setisFollowing] = useState(false);

  const naviagte = useNavigate();

  function handleFollowingBtn() {
    setisFollowing((prev) => !prev);
  }
  return (
    <section>
      <UserImages />

      <div
        className="row justify-content-center"
      >
        <div className="col-10 col-md-6 text-center mt-1">
          <Text size="xl" fw={700}>
            {userData.userSnippetDetails.username}
          </Text>
        </div>

        <div className="col-md-7 col-8 mt-4 px-5 ">
          <div className="d-flex justify-content-center flex-column flex-lg-row">
            <div className="d-flex justify-content-evenly me-lg-3">
              <div className=" mb-xl-0 mb-3 border-end border-2 pe-2 me-lg-4 text-center">
                <Text size="sm" fw={700}>
                  {userData.userFollowers}
                </Text>
                <Text size="xs" fw={500}>
                  Followers
                </Text>
              </div>

              <div className=" mb-xl-0 mb-3 border-end border-2 pe-2 text-center">
                <Text size="sm" fw={700}>
                  {userData.noOfEvents}
                </Text>
                <Text size="xs" fw={500}>
                  Events
                </Text>
              </div>
            </div>

            {!userData.userProfile && (
              <UserActionButtons
                isFollowing={isFollowing}
                followBtnHandler={handleFollowingBtn}
              />
            )}

            {userData.userProfile && (
              <Button variant="filled"
              onClick={()=> naviagte('/editProfile')}
              >
                Edit profile
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
