import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.div`
  border: 1px solid;
  border-radius: 10px;
  ${(props: any) =>
    props.text === "l" &&
    css`
      font-size: 1.1rem;
    `}
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8.5rem;
  gap: 5px;
  text-align: center;
  cursor: pointer;
  background-color: #d6d6f0;
`;
const Button = ({ children, ...rest }: any) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;
