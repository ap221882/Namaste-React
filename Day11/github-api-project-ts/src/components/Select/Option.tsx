type Props = {
  value: string;
  children: string;
};

const Option = ({ value }: Props) => {
  return (
    <option value={value} key={value}>
      {value}
    </option>
  );
};

export default Option;
