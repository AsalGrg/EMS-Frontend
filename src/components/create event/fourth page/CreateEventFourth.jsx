import React, { useState } from "react";
import PreviewEvent from "./PreviewEvent";
import { useDispatch, useSelector } from "react-redux";
import { updateCreateEventField } from "../../../pages/create event/CreateEventSlice";
import { TextInput } from "@mantine/core";
import FormButtons from "../formButtons";
import create_event from "../../../services/create event/create_event";
import { formDataLogic } from "../../../pages/create event/formDataLogic";
import { Formik } from "formik";
import CreateEventContextWrapper from "../../../context/CreateEventContext";
import { createEventFourthPageSchema } from "../../../schemas";

export const CreateEventFourth = () => {
  const formState = useSelector((state) => state.createEvent);
  const dispatch = useDispatch();

  const handlePublishSubmit = () => {
    console.log("here");
    // const res = await create_event(formDataLogic(formState));
    // // const res= await create_event();
    // const data = await res.json();
    // console.log(data);
  };

  const initialValues = {
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
                  <select className="ps-2 pe-2 py-2 rounded">
                    <option
                      defaultValue={formik.values.visibilityOption === "Link"}
                      onClick={() => {
                        formik.handleChange({
                          target: {
                            name: "visibilityOption",
                            value: "Link",
                          },
                        });
                      }}
                    >
                      Anyone with the link
                    </option>

                    <option
                      defaultValue={
                        formik.values.visibilityOption === "Password"
                      }
                      onClick={() => {
                        formik.handleChange({
                          target: {
                            name: "visibilityOption",
                            value: "Password",
                          },
                        });
                      }}
                    >
                      Only those with the password
                    </option>
                  </select>
                </div>
              </div>
            ) : null}
          </div>

          {formik.values.visibilityOption === "Password" ? (
            <TextInput
              className="col-6"
              leftSectionPointerEvents="none"
              label="Access password"
              mt={"sm"}
              name="accessPassword"
              placeholder="Enter password"
              value={formik.values.accessPassword}
              onChange={(e) => {
                formik.handleChange(e);
                console.log("hehe");
              }}
              error={
                formik.touched.accessPassword && formik.errors.accessPassword
              }
            />
          ) : null}

          <FormButtons handleSubmit={formik.handleSubmit} />
        </CreateEventContextWrapper>
      )}
    </Formik>
  );
};
