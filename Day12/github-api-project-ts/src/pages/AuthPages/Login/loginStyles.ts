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

  .error {
    color: red;
    font-size: 0.875rem;
  }

  button {
    min-width: 30rem;
    color: white;
    font-family: var(--bodyFont);
    font-weight: 400;
    margin-top: 4rem;
  }
`;
