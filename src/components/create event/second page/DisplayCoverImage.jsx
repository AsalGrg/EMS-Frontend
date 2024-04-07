import { Button, Tooltip } from "@mantine/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdCancel } from "react-icons/md";
import { useCreateEventContext } from "../../../context/CreateEventContext";

const DisplayCoverImage = ({ imageFile }) => {
  const formData = useSelector((state) => state.createEvent);
  const dispatch = useDispatch();

  const { handleChange, values } = useCreateEventContext();


  function handleDeleteImage (){
    handleChange({
      target:{
        name: 'coverImage',
        value:null
      }
    })
  }
  return (
    <section className=" position-relative">
      <div className="aspect-ratio-container shadow-sm">
        {imageFile instanceof File ? (
          <img
            src={URL.createObjectURL(imageFile)}
            alt="Event Image"
            className="rounded border img-fluid"
          />
        ) : (
          <img
            src={imageFile}
            alt="Event Image"
            className="rounded border img-fluid"
          />
        )}
      </div>

      <div className="position-absolute top-0 start-100 translate-middle ">
        <Tooltip label="Delete image">
          <Button size="xs" radius={'xl'}
          variant="filled"
          color="red"
          onClick={handleDeleteImage}
          >
            <MdCancel
            style={{
              fontSize: '18px'
            }}
            />
          </Button>
        </Tooltip>
      </div>
    </section>
  );
};

export default DisplayCoverImage;
