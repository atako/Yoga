import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classnames from 'classnames';


import { deleteAsana, getAsana, switchToEdit } from '../actions';
import AsanaEdit from '../components/edit/asanaEdit';

import { withStyles, createStyleSheet } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia, CardHeader } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import PlayArrowIcon from 'material-ui-icons/PlayArrow';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';

const styleSheet = createStyleSheet('SimpleCard', theme => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 20,
    maxWidth: 600,

  },
  details: {
    justifyContent: 'center',
    
  },
  cover: {
    marginTop: 5,
    marginBottom: 5,
    marginRight: 5,
    marginLeft: 5
  },
  title: {
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
  pos: {
    marginBottom: 12,
    color: theme.palette.text.secondary,
  },
  media: {
    marginTop: 5,
    marginLeft: 5
  },
  navButton: {
    textDecorationLine: 'none'
  },
  instructions: {
    marginBottom: 20,
    marginLeft: 20
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  flexGrow: { flex: '1 1 auto' }
}));

class Asana extends Component {

  constructor(props) {
    super(props);
    this.state = { expanded: false }
  }

  handleExpandClick() {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const classes = this.props.classes;

    return (
        <div className="small-11 columns">
          <Card className={classes.card}>
            <div className={classes.cover}>
              <img src={this.props.asana.image} />
            </div>
            <div className={classes.details}>
              <Typography type="headline" component="h2">
                {this.props.asana.title}
              </Typography>
              <Typography component="p">
                {this.props.asana.description}
              </Typography>
            </div>
            <CardActions disableActionSpacing>
              <IconButton
                className={classnames(classes.expand, {
                  [classes.expandOpen]: this.state.expanded,
                })}
                onClick={this.handleExpandClick.bind(this)}
                aria-expanded={this.state.expanded}
                aria-label="Show more"
                >
                <ExpandMoreIcon />
                </IconButton> 
              </CardActions>
              <Collapse in={this.state.expanded} transitionDuration="auto" unmountOnExit>
              <Typography className={classes.instructions} component="p">
                {this.props.asana.description}
              </Typography>
              </Collapse>
          </Card>
        </div>
      )
    }
}

Asana.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(Asana);

