import { addDecorator } from "@storybook/react";
import { withThemes } from "@react-theming/storybook-addon";
import { theme, invertedTheme } from "../src/theme";
import { ThemeProvider } from "styled-components";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator(withThemes(ThemeProvider, [theme, invertedTheme]));
