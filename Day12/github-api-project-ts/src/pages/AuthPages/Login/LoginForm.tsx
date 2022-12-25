import React from "react";
import { Formik } from "formik";

import { IFormValues, validationSchema } from "../../utils";
import { Input } from "../../../components";
import { appLogin } from "../../../slices/loginSlice";
import { useAppSelector, useAppDispatch } from "../../../hooks";
import { Navigate } from "react-router-dom";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  file: "",
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
        <form onSubmit={formik.handleSubmit}>
          {/* First Name Input*/}
          <h4>Welcome, please enter the details</h4>
          <Input
            type="text"
            {...formik.getFieldProps("firstName")}
            value={formik.values.firstName}
            labelText="First Name"
            errorCondition={
              (formik.touched.firstName && formik.errors.firstName) as string
            }
          />
          {/* Last Name Input */}
          <Input
            type="text"
            {...formik.getFieldProps("lastName")}
            value={formik.values.lastName}
            labelText="Last Name"
            errorCondition={
              (formik.touched.lastName && formik.errors.lastName) as string
            }
          />
          {/* email input */}
          <Input
            type="email"
            {...formik.getFieldProps("email")}
            value={formik.values.email}
            labelText="Email Address"
            errorCondition={
              (formik.touched.email && formik.errors.email) as string
            }
          />
          {/* <Input
            type="file"
            name="file"
            onChange={(event) => {
              console.log(event, "event");
              // formik.setFieldValue("file", event?.currentTarget?.files?.[0]);
            }}
            value={formik.values.profile}
            labelText="Profile Picture"
            // errorCondition={formik.errors.email as string}
          /> */}
          {/* <input
            type="file"
            name="file"
            id="file"
            onChange={(event) => {
              console.log(event, "event");
              formik.setFieldValue("file", event?.target?.files?.[0]);
            }}
            accept="image/png, image/jpeg"
          /> */}
          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
};

export default LoginForm;
