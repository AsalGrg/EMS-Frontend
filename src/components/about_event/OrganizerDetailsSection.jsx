import { Avatar, Button } from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconUserCheck,
  IconWorld,
} from "@tabler/icons-react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { followVendorStateAboutEvent, unfollowVendorStateAboutEvent } from "../../pages/about_event/AboutEventSlice";
import follow_vendor from "../../services/user/follow_vendor";
import unfollow_vendor from "../../services/user/unfollow_vendor";

const OrganizerDetailsSection = () => {
  
  const vendorDetails = useSelector((state) => state.aboutEvent).vendorDetails;
  const dispatch = useDispatch();
  const followVendor= async ()=>{
    const res= await follow_vendor(vendorDetails.vendorId)
    if(res.ok){
      dispatch(followVendorStateAboutEvent())
    }
  }

  const unfollowVendor= async ()=>{
    const res= await unfollow_vendor(vendorDetails.vendorId)
    if(res.ok){
      dispatch(unfollowVendorStateAboutEvent())
    }
  }

  return (
    <section className="container px-5 mt-5 mb-5">
      <h4 className="fw-bold mb-3">About the organizer</h4>
      <div className="d-flex justify-content-center mt-3">
        <div className="shadow organizerDetailContainer d-flex justify-content-center align-items-center flex-column py-5 rounded">
          <Avatar
            src={vendorDetails!==undefined ?vendorDetails.vendorProfile: null}
            alt="it's me"
            size="xl"
          />

          <p className="mt-4 text-center">
            <span className="text-secondary">Organized By</span>
            <br />
            <span className="fw-bold">{vendorDetails!==undefined ?vendorDetails.vendorName: 'Vendor Name'}</span>
          </p>

          <p className="mt-4 text-center">
            <span className="fw-bold">{vendorDetails!==undefined ?vendorDetails.vendorFollowers: '--'}</span>
            <br />
            <span className="text-secondary">Followers</span>
          </p>

          <div className="d-flex justify-content-evenly mt-4">
            <Button variant="light" size="md" className="me-5" title="conact-btn">
              Contact
            </Button>

            {vendorDetails!==undefined&& !vendorDetails.hasFollowed ? (
                <Button
                  variant="filled"
                  size="md"
                  onClick={() => followVendor()}
                >
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
              )
            }
          </div>

          {/* <div className="mt-5 d-flex justify-content-evenly w-100 px-5">
            <div
              className="rounded p-2 "
              style={{ backgroundColor: "rgb(248, 247, 250)" }}
            >
              <IconBrandFacebook size={25} color="rgb(54, 89, 227)" />
            </div>

            <div
              className="rounded p-2 "
              style={{ backgroundColor: "rgb(248, 247, 250)" }}
            >
              <IconBrandInstagram size={25} color="rgb(54, 89, 227)" />
            </div>

            <div
              className="rounded p-2 "
              style={{ backgroundColor: "rgb(248, 247, 250)" }}
            >
              <IconBrandTwitter size={25} color="rgb(54, 89, 227)" />
            </div>

            <div
              className="rounded p-2 "
              style={{ backgroundColor: "rgb(248, 247, 250)" }}
            >
              <IconBrandLinkedin size={25} color="rgb(54, 89, 227)" />
            </div>

            <div
              className="rounded p-2 "
              style={{ backgroundColor: "rgb(248, 247, 250)" }}
            >
              <IconWorld size={25} color="rgb(54, 89, 227)" />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default OrganizerDetailsSection;
