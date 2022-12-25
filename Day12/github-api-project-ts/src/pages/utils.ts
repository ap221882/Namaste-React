import * as Yup from "yup";

import { IFormikProps } from "./AuthPages/Login/login.types";

export interface IFormValues {
  firstName?: string;
  lastName?: string;
  email?: string;
  profile?: string;
}

export const validate = (values: IFormValues) => {
  const errors: IFormValues = {};

  // Validations of Inputs
  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less!";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Must be 20 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  return errors;
};

export const validationSchema = Yup.object({
  firstName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  lastName: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
});

/**
 * For Handling Profile change and recieving blob using FileReader Web API
 * @param e - event object
 * @param formik - formik object to provide "profile" key to formik values
 */
export const handleProfileChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  formik: IFormikProps,
) => {
  const firstFile = e?.target?.files?.[0] as Blob;
  const reader = new FileReader();

  reader.addEventListener("load", (event: ProgressEvent<FileReader>) => {
    const targetUrl = event?.target?.result;
    formik.setFieldValue("profile", targetUrl);
  });

  reader.readAsDataURL(firstFile);
};
