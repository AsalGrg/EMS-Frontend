import React from "react";
import { createContext, useContext } from "react";

export const CreateEventContext = createContext(null);

export default function CreateEventContextWrapper({ children, formik }) {
  return (
    <CreateEventContext.Provider value={formik}>
      {children}
    </CreateEventContext.Provider>
  );
};

export function useCreateEventContext() {
  const formik = useContext(CreateEventContext);

  if (!formik) {
    throw new Error("Error using context");
  }

  // Destructure the formik object and return its properties
  const { handleChange, errors, touched, values, handleSubmit } = formik;
  return { handleChange, errors, touched, values, handleSubmit };
}
