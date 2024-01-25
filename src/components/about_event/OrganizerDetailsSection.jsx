import { Avatar, Button } from "@mantine/core";
import React from "react";

const OrganizerDetailsSection = () => {
  return (
    <section className="container px-5">
      <h5 className="fw-bold">About the organizer</h5>
      <div className="d-flex justify-content-center mt-5">
        <div className="shadow organizerDetailContainer d-flex justify-content-center align-items-center flex-column py-5">
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

            <Button variant="light" size="md" className="me-5">
              Contact
            </Button>
            <Button variant="filled" size="md">
              Follow
            </Button>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, aliquam recusandae! Dolore, aperiam minus! Accusamus, laborum temporibus? Quos, eos ab fuga mollitia error tempora id. Eius quod quam ullam accusantium, perspiciatis labore, commodi corporis iure non, sint in ratione incidunt placeat cum! Commodi ducimus facilis mollitia voluptatibus unde quae corrupti soluta molestiae, quidem quasi esse optio veritatis in numquam nemo!</p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizerDetailsSection;
