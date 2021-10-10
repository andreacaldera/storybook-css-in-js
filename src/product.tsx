import React, { FC } from "react";
import { Product as ProductProps } from "../__generated.dev__/typescript-operations";

import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import { Button, CardActions } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export const Product: FC<ProductProps> = ({ image, name, price }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title={name} subheader={`£${price}`} />
      <CardMedia
        className={classes.media}
        image={`https://cataas.com/cat?q=${image}`}
        title={name}
      />
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
        ></Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          View More
        </Button>
        <Button size="small" color="primary">
          Add to basket
        </Button>
      </CardActions>
    </Card>
  );
};
