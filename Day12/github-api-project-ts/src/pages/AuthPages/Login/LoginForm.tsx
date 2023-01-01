/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Formik } from "formik";
import { Navigate } from "react-router-dom";

import {
  IFormValues,
  validationSchema,
  handleProfileChange,
} from "../../utils";
import { appLogin } from "../../../slices/loginSlice";
import { useAppSelector, useAppDispatch } from "../../../hooks";
import Form from "./Form";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  profile: "",
};

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector((state) => state.login.isLoggedIn);

  const handleSubmit = (
    values: IFormValues,
    setSubmitting: (isSubmitting: boolean) => void,
  ) => {
    setTimeout(() => {
      dispatch(appLogin(values));
      setSubmitting(false);
    }, 400);
  };

  if (isLoggedIn) {
    return <Navigate to="/" replace></Navigate>;
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) =>
        handleSubmit(values, setSubmitting)
      }
    >
      {(formik) => (
        <Form formik={formik} handleProfileChange={handleProfileChange} />
      )}
    </Formik>
  );
};

export default LoginForm;
