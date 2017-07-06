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
  // content: {
  //   flex: '1 0 auto',
  // },
  // bullet: {
  //   display: 'inline-block',
  //   margin: '0 2px',
  //   transform: 'scale(0.8)',
  // },
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
  }
}));

class FullAsana extends Component {

  

  componentDidMount() {
    this.props.getAsana(this.props.match.params.id);
  }

  onDeleteClick() {
    const { id } = this.props.match.params;
    this.props.deleteAsana(id, () => {
      this.props.history.push('/');
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
      <div className="small-11 columns">
        <div className="columns">
          <ul className="accordion" data-accordion data-allow-all-closed="true">  
            <li className="accordion-item" data-accordion-item>
              <a href='#' className="accordion-title">
                <div className = "media-object">
                  <div className="media-object-section">
                    <img width = "200" height="200" className="thumbnail" src={this.props.asans.image}/>
                  </div>
                  <div className="media-object-section">
                    <h4>{this.props.asans.title}</h4>
                    {!this.props.asans.footDistance ? '' : <span className="secondary label">Ширина ног {this.props.asans.footDistance}</span>}
                    {!this.props.asans.footPosition ? '' : <span className="success label">Позиция ног {this.props.asans.footPosition}</span>}
                    {!this.props.asans.duration ? '' : <span className="primary label">Время {this.props.asans.duration}</span>}
                    <h5>{this.props.asans.description}</h5>
                    <button type="button" className="alert button" onClick={this.onDeleteClick.bind(this)}>Delete</button>
                    <Link to={`/asans/edit/${this.props.asans._id}`} className="button">Edit</Link>
                  </div>
                  </div>
              </a>
            </li>
          </ul>
        </div>
    </div>
    <div className="small-11 columns">
      <Card className={classes.card}>
        <div className={classes.cover}>
          <img src={this.props.asans.image} />
        </div>
        <div className={classes.details}>
          <Typography type="headline" component="h2">
            {this.props.asans.title}
          </Typography>
          <Typography component="p">
            {this.props.asans.description}
          </Typography>
        </div>
        {/*<CardMedia className={classes.media}>
          <img src={this.props.asans.image} alt="Contemplative Reptile" />
        </CardMedia>*/}
        {/*<CardContent>
          <Typography type="body1" className={classes.title}>
            Word of the Day
          </Typography>
          <Typography type="headline" component="h2">
            {this.props.asans.title}
          </Typography>
          <Typography type="body1" className={classes.pos}>
            adjective
          </Typography>
          <Typography component="p">
            well meaning and kindly.<br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button raised>Learn More</Button>
        </CardActions>*/}
      </Card>
    </div>
    </div>
    
    );
  }
}


FullAsana.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return { asans: state.asans };
}


export default withStyles(styleSheet)(connect(mapStateToProps, { deleteAsana, getAsana })(FullAsana));
