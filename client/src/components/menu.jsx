// @flow
import { Link } from 'react-router-dom'; 
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

const styleSheet = createStyleSheet('ButtonAppBar', {
  root: {
    width: '100%',
    marginBottom: 30,
    background: 'white'
  },
  flex: {
    flex: 1,
  },
  navButton: {
    color: 'white',
    textDecorationLine: 'none'
  }
});

function ButtonAppBar(props) {
  const classes = props.classes;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="contrast" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="inherit" className={classes.flex}>
            Title
          </Typography>
          <Link className={classes.navButton} to="/">
            <Button className={classes.navButton}>Список</Button>
          </Link>
          <Link className={classes.navButton} to="/plan">
            <Button className={classes.navButton}>План</Button>
          </Link>
          <Link className={classes.navButton} to="/edit">
            <Button className={classes.navButton}>Редактирование</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(ButtonAppBar);