/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Formik, FormikProps } from "formik";

import { IFormValues, validationSchema } from "../../utils";
import { Input } from "../../../components";
import { appLogin } from "../../../slices/loginSlice";
import { useAppSelector, useAppDispatch } from "../../../hooks";
import { Navigate } from "react-router-dom";
import { StyledFileInput } from "./loginStyles";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  profile: "",
};

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector((state) => state.login.isLoggedIn);

  const handleProfileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    formik: FormikProps<{
      firstName: string;
      lastName: string;
      email: string;
      profile: string;
    }>,
  ) => {
    const firstFile = e?.target?.files?.[0] as Blob;
    const reader = new FileReader();

    reader.addEventListener("load", (event: ProgressEvent<FileReader>) => {
      const targetUrl = event?.target?.result;
      formik.setFieldValue("profile", targetUrl);
    });

    reader.readAsDataURL(firstFile);
  };

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
          <StyledFileInput>
            <label htmlFor="file">Upload Profile Picture</label>
            <input
              type="file"
              name="file"
              id="file"
              onChange={(e) => handleProfileChange(e, formik)}
              accept="image/png, image/jpeg"
            />
          </StyledFileInput>
          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
};

export default LoginForm;
