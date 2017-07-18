import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { addAsana } from '../actions';
import { Link } from 'react-router-dom';


class NewAsana extends Component {


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
  this.props.addAsana(values, () => {
    this.props.history.push('/');
  });
}

render() {

    const { handleSubmit } = this.props;

    return(
      <div className='medium-10 columns'>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field 
            label="Title"
            name="title"
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
            label="Descripton"
            name="description"
            component={this.renderField}
          />
          <button type="submit" className="success button">Add</button>
        </form>
      </div>
    );
  }
}

const validate = (values) => {
  const errors = {};

  if(!values.title || values.title.length < 3) {
    errors.title = "Enter a title is at least 3 characters!";
  }

  return errors;
}

export default reduxForm({
  validate: validate,
  form: 'newAsanaForm'
})(
  connect(null,{ addAsana })(NewAsana)
)