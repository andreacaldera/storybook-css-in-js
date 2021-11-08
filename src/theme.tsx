export const theme = {
  button: { color: "lightgrey", background: "black" },
};

export type MyTheme = typeof theme;

export const jaegerTheme: MyTheme = {
  button: { color: "black", background: "lightgrey" },
};
