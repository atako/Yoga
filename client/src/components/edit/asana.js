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
    console.log(this.props);

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
      {/*<div className="small-11 columns">
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
    </div>*/}
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
           <Link className={classes.navButton} to={`/asans/edit/${this.props.asana._id}`}>
            <Button color="primary" className={classes.navButton}>Редактировать</Button>
          </Link>
          <Link className={classes.navButton} to={`/asans/edit/${this.props.asana._id}`}>
            <Button color="accent" className={classes.navButton} onClick={this.onDeleteClick.bind(this)} >Удалить</Button>
          </Link> 
      </Card>
    </div>
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
