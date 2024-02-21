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

const OrganizerDetailsSection = () => {
  const [isFollowing, setisFollowing] = useState(false);

  return (
    <section className="container px-5 mt-5 mb-5">
      <h4 className="fw-bold mb-3">About the organizer</h4>
      <div className="d-flex justify-content-center mt-3">
        <div className="shadow organizerDetailContainer d-flex justify-content-center align-items-center flex-column py-5 rounded">
          <Avatar
            src="https://scontent.fktm16-1.fna.fbcdn.net/v/t39.30808-6/316669820_1486705245141001_8411721115992888449_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=cJktd2uGkiUAX_8bPuQ&_nc_ht=scontent.fktm16-1.fna&oh=00_AfCVVFoPFJt6gBoDEyQdHwXV-nUeBVGi2dojOua2YdNiow&oe=65B44B3C"
            alt="it's me"
            size="xl"
          />

          <p className="mt-4">
            <span className="text-secondary">Organized By</span>
            <br />
            <span className="fw-bold">Asal Gurung</span>
          </p>

          <p className="mt-4 text-center">
            <span className="fw-bold">1000</span>
            <br />
            <span className="text-secondary">Followers</span>
          </p>

          <div className="d-flex justify-content-evenly mt-4">
            <Button variant="light" size="md" className="me-5" title="conact-btn">
              Contact
            </Button>

            {!isFollowing ? (
              <Button
                variant="filled"
                size="md"
                onClick={() => setisFollowing((prev) => !prev)}
              >
                Follow
              </Button>
            ) : (
              <Button
                onClick={() => setisFollowing((prev) => !prev)}
                variant="light"
                size="md"
                color="gray"
                leftSection={<IconUserCheck size={20} className="fw-bold" />}
              >
                Following
              </Button>
            )}
          </div>

          <div className="mt-5 d-flex justify-content-evenly w-100 px-5">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizerDetailsSection;
