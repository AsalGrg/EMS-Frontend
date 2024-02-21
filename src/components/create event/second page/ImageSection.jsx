import React from "react";
import ImageInput from "./ImageInput";
import { useDispatch, useSelector } from "react-redux";
import DisplayCoverImage from "./DisplayCoverImage";
import { useCreateEventContext } from "../../../context/CreateEventContext";
import { Text } from "@mantine/core";

const ImageSection = () => {
  const { handleChange, values, errors, touched } = useCreateEventContext();

  return (
    <section>
      {/* <ImageSelector image={formState.coverImage} changeImage={changeImage} /> */}
      {values.coverImage === null ? (
        <ImageInput/>
      ) : (
        <DisplayCoverImage imageFile={values.coverImage} />
      )}

      {touched.coverImage && errors.coverImage ? (
        <Text size="md" c={"red"}>
          {errors.coverImage}
        </Text>
      ) : null}
    </section>
  );
};

export default ImageSection;
