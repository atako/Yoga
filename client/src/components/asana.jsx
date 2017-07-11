import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteAsana, getAsana, switchToEdit } from '../actions';
import AsanaEdit from '../components/asanaEdit';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import PlayArrowIcon from 'material-ui-icons/PlayArrow';

const styleSheet = createStyleSheet('SimpleCard', theme => ({
  card: {
    display: 'flex',
    //justifyContent: 'center',
    // minWidth: 400,
    // minHeight: 1000,
    marginBottom: 20,
    maxWidth: 960,

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

const Asana = (props) => {

// const listAsansDetails = !props.asana.detail ? 'No details' : props.asana.detail.map((detail) =><AsanaDetail detail={detail} /> )
  const classes  = props.classes;

  return (
    <div className="small-11 columns">
      <Card className={classes.card}>
        <div className={classes.cover}>
          <img src={props.asana.image} />
        </div>
        <div className={classes.details}>
          <Typography type="headline" component="h2">
            {props.asana.title}
          </Typography>
          <Typography component="p">
            {props.asana.description}
          </Typography>
        </div>
          <Link className={classes.navButton} to={`/asans/${props.asana._id}`}>
            <Button color="primary" className={classes.navButton}>Подробнее</Button>
          </Link>
      </Card>
    </div>
    // <div className="row">
    //   <div className="small-1 columns">
    //     <Link to={`/asans/${props.asana._id}`}>Details</Link>
    //   </div>
    //   <div className="small-11 columns">
    //     <div className="columns">
    //       <ul className="accordion" data-accordion data-allow-all-closed="true">  
    //         <li className="accordion-item" data-accordion-item>
    //           <a href='#' className="accordion-title">
    //             <div className = "media-object">
    //               <div className="media-object-section">
    //                 <img width = "200" height="200" className="thumbnail" src={props.asana.image}/>
    //               </div>
    //               <div className="media-object-section">
    //                 <h4>{props.asana.title}</h4>
    //                 {!props.asana.footDistance ? '' : <span className="secondary label">Ширина ног {props.asana.footDistance}</span>}
    //                 {!props.asana.footPosition ? '' : <span className="success label">Позиция ног {props.asana.footPosition}</span>}
    //                 {!props.asana.duration ? '' : <span className="primary label">Время {props.asana.duration}</span>}
    //                 <h5>{props.asana.description}</h5>
    //               </div>
    //               </div>
    //           </a>
    //           <div className="accordion-content" data-tab-content>
    //             {listAsansDetails}
    //           </div>
    //         </li>
    //       </ul>
    //     </div>
    // </div>
    )
}

Asana.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(Asana);

