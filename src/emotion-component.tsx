import { css, andrea } from "@emotion/react";
import styled from "@emotion/styled";

import React from "react";

const test: andrea = 1;
console.log(test);

const StyledMyComponent = styled.div`
  ${({ theme }) => {
    console.log(111, theme.primary.color);
    return css`
      color: ${theme.primary.color};
      background: white;
      font-size: 2rem;
    `;
  }}
`;

export const EmotionComponent: React.FC = () => {
  return <StyledMyComponent>test</StyledMyComponent>;
};
