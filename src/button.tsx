import styled from "@emotion/styled";

import { FC } from "react";

const StyleButton = styled.button`
  ${({ theme }) => {
    return `color: ${theme.button.color}`;
  }}
`;

export const Button: FC = () => {
  return <StyleButton />;
};
