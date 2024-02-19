import React, { useState } from "react";
import PreviewEvent from "./PreviewEvent";
import { useDispatch, useSelector } from "react-redux";
import { updateCreateEventField } from "../../../pages/create event/CreateEventSlice";
import { TextInput } from "@mantine/core";
import FormButtons from "../formButtons";

export const CreateEventFourth = () => {
  // const [isPublic, setisPublic] = useState(true)
  // const [isPrivate, setisPrivate] = useState(false)

  // const [canAccessWithLink, setCanAccessWithLink] = useState(true)

  const formState = useSelector((state) => state.createEvent);
  const dispatch = useDispatch();

  return (
    <>
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
                checked={!formState.isPrivate}
                onChange={() => {
                  dispatch(
                    updateCreateEventField({
                      field: "isPrivate",
                      value: false,
                    })
                  );
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
                checked={formState.isPrivate}
                onChange={() => {
                  dispatch(
                    updateCreateEventField({
                      field: "isPrivate",
                      value: true,
                    })
                  );
                }}
              />
            </div>
            <div className="">
              <p>Private</p>
            </div>
          </div>
        </div>

        {formState.isPrivate ? (
          <div className="">
            <h4>Choose your audience</h4>
            <div>
              <select className="ps-2 pe-2 py-2 rounded">
                <option
                  defaultValue={formState.visibilityOption === "Link"}
                  onClick={() => {
                    dispatch(
                      updateCreateEventField({
                        field: "visibilityOption",
                        value: "Link",
                      })
                    );
                  }}
                >
                  Anyone with the link
                </option>

                <option
                  defaultValue={formState.visibilityOption === "Password"}
                  onClick={() => {
                    dispatch(
                      updateCreateEventField({
                        field: "visibilityOption",
                        value: "Password",
                      })
                    );
                  }}
                >
                  Only those with the password
                </option>
              </select>
            </div>

            {formState.visibilityOption === "Password" ? (
              <TextInput
                className="col-6"
                leftSectionPointerEvents="none"
                label="Access password"
                name="accessPassword"
                placeholder="Enter password"
                value={formState.accessPassword}
                onChange={(e) => {
                  dispatch(
                    updateCreateEventField({
                      field: "accessPassword",
                      value: e.target.value,
                    })
                  );
                }}
              />
            ) : null}
          </div>
        ) : null}
      </div>

      <FormButtons />
    </>
  );
};
