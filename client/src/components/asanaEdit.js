import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import Button from 'material-ui/Button';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';


import { getAsana, updateAsana } from '../actions';

const styleSheet = createStyleSheet('EditAsana', theme => ({
  wrap: {
    display: 'flex',
    justifyContent: 'center',
    flexGrow: '1'

  },
  container: {
    // display: 'flex',
    // flexWrap: 'wrap',
    // flexGrow: '1'
  },
  input: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300,
  },
  inputSmall: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 100,
  },
  paper: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    background: 'whitesmoke',
    elevation: 20,
    square: true
  }),
  button: {
    margin: theme.spacing.unit,
  },
}));

class EditAsana extends Component {

// state = {
//   name: 'Cat in the Hat',
// };

componentDidMount() {
  this.handleInitialize();
}


handleInitialize() {
  const initData = {
    "title": this.props.asans.title,
    "duration": this.props.asans.duration,
    "footDistance": this.props.asans.footDistance,
    "description": this.props.asans.description
  };

  this.props.initialize(initData);
}

renderField(field) {
  return (
    // <div className='medium-6 columns'>
    //   <label>{field.label}</label>
    //     <input type="text" {...field.input}/>  
    //   {field.meta.touched ? field.meta.error: ''}
    // </div>
    <TextField
      required
      id="title"
      label="Название"
      //className={classes.input}
      defaultValue='test'
      onChange={event => this.setState({ name: event.target.value })}
      marginForm
    />
  )
}

onSubmit(values) {
  this.props.updateAsana(this.props.asans._id, values, () => {
    this.props.history.push(`/asans/${this.props.asans._id}`);
  });
}

render() {
  const classes = this.props.classes;
  const { handleSubmit } = this.props;
  return(
    <div className={classes.wrap}>
    <div className={classes.container}>
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Paper className={classes.paper} elevation={4}>
          <Grid container gutter={8}>
            <Grid item xs={8}>
              <Field 
                label="Title"
                name="title"
                type="text"
                component={this.renderField}
              />
              <TextField
                required
                id="title"
                label="Название"
                className={classes.input}
                defaultValue={this.props.asans.title}
                onChange={event => this.setState({ name: event.target.value })}
                marginForm
              />
              <TextField
                id="duration"
                label="Время"
                defaultValue={this.props.asans.duration}
                className={classes.inputSmall}
                marginForm
              />
              <TextField
                id="footDistance"
                label="Расстояние"
                defaultValue={this.props.asans.footDistance}
                className={classes.inputSmall}
                marginForm
              />
              <TextField
                id="footPosition"
                label="Позиция"
                defaultValue={this.props.asans.footPosition}
                className={classes.inputSmall}
                marginForm
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                id="description"
                label="Описание"
                multiline
                rows="3"
                defaultValue={this.props.asans.description}
                className={classes.input}
                marginForm
              />
            </Grid>
            <Grid item xs={2}>
              <Button raised color="primary" className={classes.button} type="submit">
                Сохранить
              </Button> 
            </Grid> 
          </Grid>
        </Paper>   
      </form>
    </div>

    </div>
)}
  
        // {/*<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        //   <Field 
        //     label="Title"
        //     name="title"
        //     type="text"
        //     component={this.renderField}
        //   />
        //   <Field
        //     label="Duration"
        //     name="duration"
        //     component={this.renderField}
        //   />
        //   <Field 
        //     label="Foot distance"
        //     name="footDistance"
        //     component={this.renderField}
        //   />
        //   <Field 
        //     label="Link to image"
        //     name="image"
        //     component={this.renderField}
        //   />
        //   <Field 
        //     label="Description"
        //     name="description"
        //     component={this.renderField}
        //   />
        //   <Button type="submit" raised color="primary">Save</Button>
        // </form>*/}
        // <div>
        //   {/*<div className={classes.container}>
        //     <Input defaultValue="Hello world" className={classes.input} />
        //     <Input placeholder="Placeholder" className={classes.input} />
        //     <Input value="Disabled" className={classes.input} disabled />
        //     <Input defaultValue="Error" className={classes.input} error />
        //   </div>*/}
        // </div>)
  

}

const validate = (values) => {
  const errors = {};

  if(!values.title || values.title.length < 3) {
    errors.title = "Enter a title is at least 3 characters!";
  }

  return errors;
}

EditAsana.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return { asans: state.asans };
}

export default (reduxForm({
  validate: validate,
  form: 'editAsana'
}))(connect(mapStateToProps, { getAsana, updateAsana })(withStyles(styleSheet)(EditAsana)));

// export default withStyles(styleSheet)(EditAsana);