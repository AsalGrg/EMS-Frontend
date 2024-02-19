import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCreateEventField } from "../../../pages/create event/CreateEventSlice";
import { Select, TextInput } from "@mantine/core";

const BasicInfo = ({ formik }) => {
  const dispatch = useDispatch();
  // const { category, eventTitle, errors, touched } = useSelector(
  //   (state) => state.createEvent
  // );

  const { values, touched, errors } = formik;

  const handleInputChange = (e) => {
    const fieldValue = {
      field: e.target.name,
      value: e.target.value,
    };
    dispatch(updateCreateEventField(fieldValue));
  };

  function handleSelectChange(selectedValue, field) {
    formik.handleChange({
      target: {
        name: field,
        value: selectedValue,
      },
    });
  }

  return (
    <>
      <div className="">
        <h1>Basic Info</h1>
        <p>This is basic info section</p>
      </div>

      <div className="row mb-2">
        <div className="col-md-7 col-12">
          <TextInput
            leftSectionPointerEvents="none"
            label="Event Title"
            name="eventTitle"
            placeholder="Be clear and concise"
            value={values.eventTitle}
            onChange={(e) => {
              formik.handleChange(e);
            }}
            error={touched.eventTitle && errors.eventTitle}
          />
        </div>

        {/* <div className="categorySelectorInputsCreateEvent"> */}
        <Select
          label="Select category"
          placeholder="Category"
          name="category"
          value={values.category}
          onChange={(selectedOption) =>
            handleSelectChange(selectedOption, "category")
          }
          data={["React", "Angular", "Vue", "Vite", "Svelte", "Hello", "Check"]}
          className="col-md-5 col-12"
          error={touched.category && errors.category}
          // searchable
        />
      </div>
      {/* </div> */}
    </>
  );
};

export default BasicInfo;
