import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primary: {
      color: string;
      background: string;
    };
  }
}
