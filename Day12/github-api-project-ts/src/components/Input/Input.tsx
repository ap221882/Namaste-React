/* eslint-disable @typescript-eslint/ban-types */
import React from "react";
import styled from "styled-components";

import InputError from "./InputError";

interface Props {
  type: string;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  value: string;
  labelText: string;
  errorCondition?: string;
}

const StyledInput = styled.div`
  margin-top: 2rem;
  label {
    font-size: 0.875rem;
  }

  input[type="text"]::placeholder {
    margin-top: 2px;
    font-size: 1.2rem;
  }

  input[type="text"] {
    margin-top: 2px;
    font-size: 1.2rem;
    font-weight: 400;
    color: #6c737d;
    font-family: var(--bodyFont);
  }
  input {
    border: 1px solid #e2e8f0;
    padding: 4px 8px;
    height: 2rem;
    min-width: 30rem;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-items: center;
    text-align: center;
  }

  input::placeholder {
    color: #334155;
    font-size: 1rem;
    padding-left: 1rem;
  }
`;

const Input = ({
  type,
  name,
  onChange,
  onBlur,
  value,
  labelText,
  errorCondition,
}: Props) => {
  return (
    <StyledInput>
      <label htmlFor={name}>{labelText}</label>
      <input
        id={name}
        name={name}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      <InputError condition={errorCondition} />
    </StyledInput>
  );
};

export default Input;
