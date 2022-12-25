import { IFormikProps } from "./login.types";

import {
  EmailInput,
  FileInput,
  FirstNameTextInput,
  LastNameTextInput,
} from "./LoginInputs";

interface Props {
  formik: IFormikProps;
  handleProfileChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    formik: IFormikProps,
  ) => void;
}

const Form = ({ formik, handleProfileChange }: Props) => {
  return (
    <form onSubmit={formik.handleSubmit}>
      {/* First Name Input*/}
      <h4>Welcome, please enter the details</h4>
      <FirstNameTextInput formik={formik} />
      {/* Last Name Input */}
      <LastNameTextInput formik={formik} />
      {/* email input */}
      <EmailInput formik={formik} />
      {/* File Input */}
      <FileInput formik={formik} handleProfileChange={handleProfileChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
