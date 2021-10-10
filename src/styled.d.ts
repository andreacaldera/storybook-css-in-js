import "@emotion/styled";
import "@emotion/react";

declare module "@emotion/styled" {
  export interface Theme {
    primary: { color: string; background: string };
  }
}

declare module "@emotion/react" {
  export interface Theme {
    primary: { color: string; background: string };
  }
}
