import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAsana, updateAsana } from '../actions';
import { Field, reduxForm } from 'redux-form';


class EditAsana extends Component {

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
          <button type="submit" className="success button">Save</button>
        </form>
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

function mapStateToProps(state) {
  return { asans: state.asans };
}

export default reduxForm({
  validate: validate,
  form: 'editAsana'
})(connect(mapStateToProps, { getAsana, updateAsana })(EditAsana));