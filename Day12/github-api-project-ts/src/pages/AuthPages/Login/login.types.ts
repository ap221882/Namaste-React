import { FormikProps } from "formik";

export type IFormikProps = FormikProps<{
  firstName: string;
  lastName: string;
  email: string;
  profile: string;
}>;

export interface IInputProps {
  formik: IFormikProps;
}

export interface IFileInputProps extends IInputProps {
  handleProfileChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    formik: IFormikProps,
  ) => void;
}
