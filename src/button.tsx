import React, { FC } from "react";
import { Button as MaterialButton, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button: {
    padding: theme.spacing(1),
  },
}));

export const Button: FC<{ text: string }> = ({ text }) => {
  const classes = useStyles();
  return (
    <MaterialButton
      variant="contained"
      color="primary"
      className={classes.button}
    >
      {text}
    </MaterialButton>
  );
};
