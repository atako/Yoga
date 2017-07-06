import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import Button from 'material-ui/Button';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import TextField from 'material-ui/TextField';

import { getAsana, updateAsana } from '../actions';

const styleSheet = createStyleSheet('TextFields', theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
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
    <div className='medium-6 columns'>
      <label>{field.label}</label>
        <input type="text" {...field.input}/>  
      {field.meta.touched ? field.meta.error: ''}
    </div>
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

  return(<div className='medium-10 columns'>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field 
            label="Title"
            name="title"
            type="text"
            component={this.renderField}
          />
          <Field
            label="Duration"
            name="duration"
            component={this.renderField}
          />
          <Field 
            label="Foot distance"
            name="footDistance"
            component={this.renderField}
          />
          <Field 
            label="Link to image"
            name="image"
            component={this.renderField}
          />
          <Field 
            label="Description"
            name="description"
            component={this.renderField}
          />
          <Button type="submit" raised color="primary">Save</Button>
        </form>
        
      <div className={classes.container}>
        <TextField
          id="name"
          label="Name"
          className={classes.input}
          onChange={event => this.setState({ name: event.target.value })}
          marginForm
        />
        <TextField
          id="uncontrolled"
          label="Uncontrolled"
          defaultValue="foo"
          className={classes.input}
          marginForm
        />
        <TextField
          required
          id="required"
          label="Required"
          defaultValue="Hello World"
          className={classes.input}
          marginForm
        />
        <TextField
          error
          id="error"
          label="Error"
          defaultValue="Hello World"
          className={classes.input}
          marginForm
        />
        <TextField
          id="password"
          label="Password"
          className={classes.input}
          type="password"
          marginForm
        />
        <TextField
          id="multiline-flexible"
          label="Multiline"
          multiline
          rowsMax="4"
          defaultValue="Default Value"
          className={classes.input}
          marginForm
        />
        <TextField
          id="multiline-static"
          label="Multiline"
          multiline
          rows="4"
          defaultValue="Default Value"
          className={classes.input}
          marginForm
        />
        <TextField
          id="date"
          label="From date"
          type="date"
          defaultValue="2017-05-24"
          className={classes.input}
          marginForm
        />
        <TextField
          id="helperText"
          label="Helper text"
          type="text"
          defaultValue="Default Value"
          className={classes.input}
          helperText="Some important text"
          marginForm
        />
        <TextField
          id="placeholder"
          label="Label"
          type="text"
          InputProps={{ placeholder: 'Placeholder' }}
          helperText="Full width!!!"
          fullWidth
          marginForm
        />
      </div>
      </div>)
}

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