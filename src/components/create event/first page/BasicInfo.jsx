import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCreateEventField } from "../../../pages/create event/CreateEventSlice";
import { Select, TextInput } from "@mantine/core";

const BasicInfo = () => {
  const dispatch = useDispatch();
  const formState = useSelector((state) => state.createEvent);

  const handleInputChange = (e) => {
    const fieldValue = {
      field: e.target.name,
      value: e.target.value,
    };
    dispatch(updateCreateEventField(fieldValue));
  };

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
            value={formState.eventTitle}
            onChange={(e) =>
              e.target.value.length <= 50 ? handleInputChange(e) : null
            }
          />
        </div>

        {/* <div className="categorySelectorInputsCreateEvent"> */}
        <Select
          label="Select category"
          placeholder="Category"
          value={formState.category}
          onChange={(selectedValue) => dispatch(updateCreateEventField({
            field:"category",
            // value: selectdValue
            value: "check"
          }))}
          data={["React", "Angular", "Vue", "Vite", "Svelte", "Hello", "Check"]}
          className="col-md-5 col-12"
          // searchable
        />
      </div>
      {/* </div> */}
    </>
  );
};

export default BasicInfo;
