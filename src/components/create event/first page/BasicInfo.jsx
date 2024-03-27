import React, { useEffect, useState } from "react";
import { Select, TextInput } from "@mantine/core";
import { useCreateEventContext } from "../../../context/CreateEventContext";
import get_all_categories from "../../../services/create event/get_all_categories";

const BasicInfo = () => {

  const { values, touched, errors, handleChange } = useCreateEventContext();

  const [allCategories, setallCategories] = useState([])

  function handleSelectChange(selectedValue, field) {
    handleChange({
      target: {
        name: field,
        value: selectedValue,
      },
    });
  }

  useEffect(() => {
    async function getCategories(){
      
      const res = await get_all_categories();
      if(res.ok){
        const data = await res.json();
        setallCategories(data)
        console.log(data)
      }
    }

    getCategories();
  }, [])
  

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
              handleChange(e);
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
          data={allCategories}
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
