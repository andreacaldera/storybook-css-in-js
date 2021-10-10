import { AppBar, makeStyles } from '@material-ui/core';

import React from 'react';

type MenuProps = {};

const useStyles = makeStyles((theme) => ({
  topBar: {
    padding: '0 1rem',
    display: 'flex',
    flexDirection: 'row',
    height: '5rem',
  },
  links: {
    color: 'white',
    paddingTop: '1.8rem',
  },
  link: {
    color: 'white',
    marginLeft: '2rem',
  },
}));

export const TopNav: React.FunctionComponent<MenuProps> = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.topBar} position="sticky">
      <h1>Super stack demo</h1>
      <div className={classes.links}>
        <a className={classes.link} href="/">
          Home
        </a>
        <a className={classes.link} href="/products">
          Browse products
        </a>
        <a className={classes.link} href="/checkout">
          Checkout
        </a>
        <a className={classes.link} href="/my-account">
          My account
        </a>
      </div>
    </AppBar>
  );
};
