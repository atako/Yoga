import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import _ from 'lodash';

import AsanaInstruction from './asanaInstruction';

import { withStyles, createStyleSheet } from 'material-ui/styles';
import PropTypes from 'prop-types';
import { Button, Icon, Image as ImageComponent, Item, Label } from 'semantic-ui-react'

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

  renderInstructions() {
    return _.isEmpty(this.props.asana.instructions) ? 'no description' :
    this.props.asana.instructions.map((instruction, index) => {
      return <AsanaInstruction key={index} detail={instruction} index={index} />
  });
}

renderDuration() {
    return (
      <Label color='blue' size='large' color='green'>
        Duration
      <Label.Detail>{this.props.asana.duration}</Label.Detail>
      </Label>
)
}

  render() {
    const classes = this.props.classes;
    return (
            <Item style={{ backgroundColor: "#ffffff"}}>
              <Item.Image src={this.props.asana.image} fluid/>
              <Item.Content>
                <Item.Header>{this.props.asana.title}</Item.Header>
                <Item.Description>{this.props.asana.description}</Item.Description>
                <Item.Extra>
                  {this.props.asana.duration !== null ? this.renderDuration : null }
                </Item.Extra>
              </Item.Content>
            </Item>
      )
    }
}

Asana.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(Asana);

