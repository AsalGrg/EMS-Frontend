import { Avatar, Button } from "@mantine/core";
import React from "react";

const OrganizerSnippet = () => {
  return (
    <section
      className="rounded d-flex justify-content-between align-items-center p-3 flex-md-row flex-column text-center"
      style={{ backgroundColor: "#f8f7fa" }}
    >
      <div className="d-flex justify-content-center align-items-center">
        <Avatar
          src="https://scontent.fktm16-1.fna.fbcdn.net/v/t39.30808-6/316669820_1486705245141001_8411721115992888449_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=cJktd2uGkiUAX_8bPuQ&_nc_ht=scontent.fktm16-1.fna&oh=00_AfCVVFoPFJt6gBoDEyQdHwXV-nUeBVGi2dojOua2YdNiow&oe=65B44B3C"
          alt="it's me"
          size="lg"
        />

        <p className="mt-3 ms-3">
          By <span className="fw-bold">Asal Gurung</span>
        </p>
      </div>
      <Button variant="filled">Follow</Button>
    </section>
  );
};

export default OrganizerSnippet;
