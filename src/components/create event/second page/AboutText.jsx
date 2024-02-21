import React from "react";
import { useCreateEventContext } from "../../../context/CreateEventContext";

const AboutText = () => {
  const { values } = useCreateEventContext();
  return (
    <>
      {!values.isAboutClicked ? (
        values.aboutEvent ? (
          <div dangerouslySetInnerHTML={{ __html: values.aboutEvent }}></div>
        ) : (
          <p className="d-none d-md-block">
            Use this section to provide more details about your event.You can
            include things to know, venue information, parking, accessbility
            options—anything that will help people know what to expect
          </p>
        )
      ) : (
        <p>
          Add more details about your event and include what people can expect
          if they attend.
        </p>
      )}
    </>
  );
};

export default AboutText;
