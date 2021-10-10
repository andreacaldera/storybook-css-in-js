import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  background: #f0f0f0;
  border: 1px solid #ccc;
  font-size: 1.5rem;
  box-sizing: border-box;
  line-height: 2rem;
  padding: 0.5rem 1rem;
  color: blue;
`;

export const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = (
  props
) => {
  return <StyledInput {...props} />;
};
