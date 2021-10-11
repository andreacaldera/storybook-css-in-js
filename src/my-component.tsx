import styled from "@emotion/styled";

import { FC } from "react";

const StyledMyComponent = styled.div`
  ${({ theme }) => {
    return `color: ${theme.primary.color}`;
  }}
`;

export const MyComponent: FC = () => {
  return <StyledMyComponent>My styled-component component</StyledMyComponent>;
};
