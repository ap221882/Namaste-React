import { Input } from "../../../components";
import { StyledFileInput } from "./login.styles";
import { IInputProps, IFileInputProps } from "./login.types";

export const FirstNameTextInput = ({ formik }: IInputProps) => {
  return (
    <Input
      type="text"
      {...formik.getFieldProps("firstName")}
      value={formik.values.firstName}
      labelText="First Name"
      errorCondition={
        (formik.touched.firstName && formik.errors.firstName) as string
      }
    />
  );
};

export const LastNameTextInput = ({ formik }: IInputProps) => {
  return (
    <Input
      type="text"
      {...formik.getFieldProps("lastName")}
      value={formik.values.lastName}
      labelText="Last Name"
      errorCondition={
        (formik.touched.lastName && formik.errors.lastName) as string
      }
    />
  );
};

export const EmailInput = ({ formik }: IInputProps) => {
  return (
    <Input
      type="email"
      {...formik.getFieldProps("email")}
      value={formik.values.email}
      labelText="Email Address"
      errorCondition={(formik.touched.email && formik.errors.email) as string}
    />
  );
};

export const FileInput = ({ formik, handleProfileChange }: IFileInputProps) => {
  return (
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
  );
};
