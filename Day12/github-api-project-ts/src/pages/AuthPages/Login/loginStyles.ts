import styled from "styled-components";

export const StyledLoginPage = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  min-height: 100vh;
  place-items: center;
  background-color: white;

  section {
    background: linear-gradient(
      185deg,
      rgba(57, 177, 221, 0.5228466386554622) 0%,
      rgba(122, 186, 186, 0.9766281512605042) 100%
    );
    height: 100%;
    width: 100%;
    display: grid;
    place-items: center;
  }

  img {
    width: 40rem;
    height: 30rem;
  }

  button {
    min-width: 30rem;
    color: white;
    font-family: var(--bodyFont);
    font-weight: 400;
    margin-top: 4rem;
  }

  .error {
    color: red;
    font-size: 0.875rem;
  }
`;

export const StyledFileInput = styled.div`
  margin-top: 2rem;

  label {
    font-size: 0.875rem;
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
`;
