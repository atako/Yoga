import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { deleteAsana, switchToEdit } from '../../actions';

import { withStyles, createStyleSheet } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import PlayArrowIcon from 'material-ui-icons/PlayArrow';
import AddIcon from 'material-ui-icons/Add';
import Grid from 'material-ui/Grid';


const styleSheet = createStyleSheet('SimpleCard', theme => ({
  card: {
    display: 'flex',
    // justifyContent: 'space-around',
    // minWidth: 400,
    // minHeight: 1000,
    marginBottom: 20
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
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
  }
}));

class EditAsana extends Component {
  constructor(props) {
    super(props)
  }

  onDeleteClick() {
    const id = this.props.asana._id;

    this.props.deleteAsana(id, () => {
      this.props.history.push('/edit');
    });
  }

  render(){
    const classes  = this.props.classes;
    const bull = <span className={classes.bullet}>•</span>;

    const asana = this.props.asans;
    if (!asana) {
      return (
        <div>Loading...</div>
      );
    }


    return (
      <div className="row">
        <Grid item md={9}>
          <Card className={classes.card}>
            <div className={classes.cover}>
              <img src={this.props.asana.image} width="200" height="200"/>
            </div>
            <div className={classes.details}>
              <Typography type="headline" component="h2">
                {this.props.asana.title}
              </Typography>
              <Typography component="p">
                {this.props.asana.description}
              </Typography>
            </div>
              <Link className={classes.navButton} to={`/asans/edit/${this.props.asana._id}`}>
                <Button color="primary" className={classes.navButton}>Редактировать</Button>
              </Link>
              <Link className={classes.navButton} to={`/asans/edit/${this.props.asana._id}`}>
                <Button color="accent" className={classes.navButton} onClick={this.onDeleteClick.bind(this)} >Удалить</Button>
              </Link> 
          </Card>
        </Grid>
    </div>
    );
  }
}


EditAsana.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return { asans: state.asans };
}


export default withStyles(styleSheet)(connect(mapStateToProps, { deleteAsana })(EditAsana));
