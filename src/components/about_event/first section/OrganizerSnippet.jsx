import { Avatar, Button } from "@mantine/core";
import { IconUserCheck } from "@tabler/icons-react";
import React, { useState } from "react";
import follow_vendor from "../../../services/user/follow_vendor";
import { useDispatch, useSelector } from "react-redux";
import unfollow_vendor from "../../../services/user/unfollow_vendor";
import {
  followVendorStateAboutEvent,
  unfollowVendorStateAboutEvent,
} from "../../../pages/about_event/AboutEventSlice";

const OrganizerSnippet = () => {
  const vendorDetails = useSelector((state) => state.aboutEvent).vendorDetails;
  const dispatch = useDispatch();
  const followVendor = async () => {
    const res = await follow_vendor(vendorDetails.vendorId);
    if (res.ok) {
      dispatch(followVendorStateAboutEvent());
    }
  };

  const unfollowVendor = async () => {
    const res = await unfollow_vendor(vendorDetails.vendorId);
    if (res.ok) {
      dispatch(unfollowVendorStateAboutEvent());
    }
  };

  return (
    <section
      className="rounded d-flex justify-content-between align-items-center p-3 flex-md-row flex-column text-center"
      style={{ backgroundColor: "#f8f7fa" }}
    >
      <div className="d-flex justify-content-center align-items-center">
        <Avatar
           src={vendorDetails!==undefined?vendorDetails.vendorProfile: null}
          alt="it's me"
          size="lg"
        />

        <p className="mt-3 ms-3">
          By <span className="fw-bold">{vendorDetails!==undefined?vendorDetails.vendorName:'vendor name'}</span>
        </p>
      </div>
      {vendorDetails!==undefined&&!vendorDetails.hasFollowed ? (
        <Button variant="filled" size="md" onClick={() => followVendor()}>
          Follow
        </Button>
      ) : (
        <Button
          onClick={() => unfollowVendor()}
          variant="light"
          size="md"
          color="gray"
          leftSection={<IconUserCheck size={20} className="fw-bold" />}
        >
          Following
        </Button>
      )}
    </section>
  );
};

export default OrganizerSnippet;
