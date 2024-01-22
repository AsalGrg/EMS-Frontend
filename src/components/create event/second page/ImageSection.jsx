import React from "react";
import ImageInput from "./ImageInput";
import { useDispatch, useSelector } from "react-redux";
import DisplayCoverImage from "./DisplayCoverImage";

const ImageSection = () => {
  const formData = useSelector((state) => state.createEvent);
  const dispatch = useDispatch();

  return (
    <section>
      {/* <ImageSelector image={formState.coverImage} changeImage={changeImage} /> */}
      {formData.coverImage === null ? <ImageInput /> : <DisplayCoverImage/>}
    </section>
  );
};

export default ImageSection;
