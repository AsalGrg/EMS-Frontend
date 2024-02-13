import { Button } from "@mantine/core";
import { IconUserCheck, IconUserPlus, IconWorld } from "@tabler/icons-react";
import React from "react";

const UserActionButtons = ({ isFollowing, followBtnHandler }) => {
  return (
    <>
      {/* for large screen */}
      <div className="d-flex justify-content-evenly d-lg-block d-none">
        <Button variant="light" className="me-lg-4">
          Contact
        </Button>
        {!isFollowing ? (
          <Button variant="filled" onClick={followBtnHandler}>
            Follow
          </Button>
        ) : (
          <Button onClick={followBtnHandler} variant="light" color="gray">
            <IconUserCheck size={20} className="fw-bold" />
          </Button>
        )}
      </div>

      {/* for small screen */}

      <div className="d-flex justify-content-evenly d-lg-none d-block">
        <Button variant="light" className="me-lg-4">
          <IconWorld size={15} className="fw-bold" />
        </Button>
        {!isFollowing ? (
          <Button variant="filled" onClick={followBtnHandler}>
            <IconUserPlus size={15} className="fw-bold" />
          </Button>
        ) : (
          <Button onClick={followBtnHandler} variant="light" color="gray">
            <IconUserCheck size={20} className="fw-bold" />
          </Button>
        )}
      </div>
    </>
  );
};

export default UserActionButtons;
