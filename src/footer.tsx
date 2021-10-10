import { makeStyles } from '@material-ui/core'
import React from 'react'



const useStyles = makeStyles((theme) => ({
  container: {
    position: 'fixed',
    marginTop: theme.spacing(1),
    bottom: '0',
    fontSize: '1rem',
    width: '100%',
    background: 'lightgrey',
  },
}))

export const Footer: React.FunctionComponent = () => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
        This is a footer
    </div>
  )
}
