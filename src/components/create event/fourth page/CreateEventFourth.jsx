import React, { useEffect, useState } from "react";
import PreviewEvent from "./PreviewEvent";
import { useDispatch, useSelector } from "react-redux";
import { decreaseActive, updateCreateEventField } from "../../../pages/create event/CreateEventSlice";
import { TextInput } from "@mantine/core";
import FormButtons from "../formButtons";
import create_event from "../../../services/create event/create_event";
import { formDataLogic } from "../../../pages/create event/formDataLogic";
import { Formik } from "formik";
import CreateEventContextWrapper from "../../../context/CreateEventContext";
import { createEventFourthPageSchema } from "../../../schemas";
import create_event_fourth_page from "../../../services/create event/create_event_fourth_page";
import { formDataLogicFourthPage } from "../../../pages/create event/formDataLogicFourthPage";
import api_urls from "../../../services/api_urls";

export const CreateEventFourth = () => {
  const formState = useSelector((state) => state.createEvent);
  const dispatch = useDispatch();

  const updateState = (values) => {
    dispatch(
      updateCreateEventField({
        field: "isPrivate",
        value: values.isPrivate,
      })
    );

    dispatch(
      updateCreateEventField({
        field: "visibilityOption",
        value: values.visibilityOption,
      })
    );

    dispatch(
      updateCreateEventField({
        field: "accessPassword",
        value: values.accessPassword,
      })
    );
  };

  const handlePrevBtn = (values) => {
    updateState(values);
    dispatch(decreaseActive());
  };


  const handlePublishSubmit = async (values, helpers) => {
    updateState(values)
    const res = await create_event_fourth_page(formDataLogicFourthPage(values), api_urls.createEventFourthPage());

    if (res.ok) {
      var data = await res.text();
      console.log("Data" + data);
    }
  };

  const initialValues = {
    eventId: formState.eventId,
    isPrivate: formState.isPrivate,
    visibilityOption: formState.visibilityOption,
    accessPassword: formState.accessPassword,
  };

  return (
    <Formik
      enableReinitialize
      validationSchema={createEventFourthPageSchema}
      initialValues={initialValues}
      onSubmit={handlePublishSubmit}
    >
      {(formik) => (
        <CreateEventContextWrapper formik={formik}>
          <div className="container">
            <div>
              <PreviewEvent />
            </div>

            <div className="mt-4">
              <h4>Who can see your event?</h4>

              <div className="d-flex">
                <div className="me-3">
                  <input
                    type="checkbox"
                    checked={!formik.values.isPrivate}
                    onChange={() => {
                      formik.handleChange({
                        target: {
                          name: "isPrivate",
                          value: false,
                        },
                      });

                      formik.handleChange({
                        target: {
                          name: "visibilityOption",
                          value: "public",
                        },
                      });
                    }}
                  />
                </div>
                <div className="">
                  <p>Public</p>
                </div>
              </div>

              <div className="d-flex">
                <div className="me-3">
                  <input
                    type="checkbox"
                    checked={formik.values.isPrivate}
                    onChange={() => {
                      formik.handleChange({
                        target: {
                          name: "isPrivate",
                          value: true,
                        },
                      });

                      formik.handleChange({
                        target: {
                          name: "visibilityOption",
                          value: "link",
                        },
                      });
                    }}
                  />
                </div>
                <div className="">
                  <p>Private</p>
                </div>
              </div>
            </div>

            {formik.values.isPrivate ? (
              <div className="">
                <h4>Choose your audience</h4>
                <div>
                  <select
                    className="ps-2 pe-2 py-2 rounded"
                    value={formik.values.visibilityOption}
                    name="visibilityOption"
                    onChange={(e) => {
                      formik.handleChange(e);
                      console.log("Visibility Option changed:", e.target.value);
                    }}
                  >
                    <option
                      value="link"
                      selected={formik.values.visibilityOption == "link"}
                    >
                      Anyone with the link
                    </option>
                    <option
                      value="password"
                      selected={formik.values.visibilityOption == "password"}
                    >
                      Only those with the password
                    </option>
                  </select>
                </div>
              </div>
            ) : null}
          </div>

          {formik.values.visibilityOption === "password" ? (
            <TextInput
              className="col-6"
              leftSectionPointerEvents="none"
              label="Access password"
              mt={"sm"}
              name="accessPassword"
              placeholder="Enter password"
              value={formik.values.accessPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.accessPassword && formik.errors.accessPassword
              }
            />
          ) : null}

          <FormButtons
            handleSubmit={formik.handleSubmit}
            handlePreviousBtn= {()=>handlePrevBtn(formik.values)}
            handleDraft={async () => {
              await create_event_second_page(
                formDataLogicFourthPage(formik.values),
                api_urls.saveEventFourthPageDraft()
              );
            }}
          />
        </CreateEventContextWrapper>
      )}
    </Formik>
  );
};
