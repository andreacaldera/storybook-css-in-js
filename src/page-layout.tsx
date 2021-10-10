import React, { FC } from 'react';
import { Container, makeStyles } from '@material-ui/core';
import { TopNav } from './top-nav';
import { Footer } from './footer';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(0),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: '5rem',
    backgroundColor: theme.palette.background.default,
    height: '100vh',
  },
  container: {
    width: '80vw',
  },
}));

export const PageLayout: FC = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <TopNav />
      <Container component="main" className={classes.container}>
        <div className={classes.paper}>{children}</div>
      </Container>
      <Footer />
    </>
  );
};
