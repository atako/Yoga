import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import Button from 'material-ui/Button';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';


import { getAsana, updateAsana } from '../../actions';

const renderTextField = ( { input, label, meta: {touched, error}, custom }) => {
    return(<TextField
      label={label}
      {...input}
      {...custom}
    />
  )
};



const styleSheet = createStyleSheet('EditAsana', theme => ({
  wrap: {
    display: 'flex',
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
    square: false,
    maxWidth: 860
  }),
  button: {
    margin: theme.spacing.unit,
  },
  instruction: {
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 10
  }
}));

class EditAsana extends Component {

  componentDidMount() {
    // this.handleInitialize();
    this.props.getAsana(this.props.match.params.id);
  };

  renderInstructions(field) {
    return _.isEmpty(this.props.asans.instructions) ? 'no description' :
    _.map(this.props.asans.instructions, instruction => {
      return <Grid key={instruction.id} className={this.props.classes.instruction} item md={12}>
            <Field
            label={`Действие ${instruction.id}`}
            name={instruction.id}
            custom={{required:false}}
            component={renderTextField}
          />
        </Grid>
    });
}
  


// handleInitialize() {
//   const initData = {
//     "title": this.props.asans.title,
//     "duration": this.props.asans.duration,
//     "footDistance": this.props.asans.footDistance,
//     "description": this.props.asans.description
//   };

//   this.props.initialize(initData);
// }



// renderField({ field, label }) {
//   return (
//     // <div className='medium-6 columns'>
//     //   <label>{field.label}</label>
//     //     <input type="text" {...field.input}/>  
//     //   {field.meta.touched ? field.meta.error: ''}
//     // </div>
//     <TextField
//       required
//       id="title"
//       label={label}
//       //className={classes.input}
//       defaultValue="Some asana"
//       //onChange={event => this.setState({ name: event.target.value })}
//       //marginForm
//     />
//   )
// }

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
          <Grid container gutter={24}>
            <Grid item xs={12} md={12}>
              <Field 
                label="Название"
                name="title"
                custom={{required:true, className:classes.input, defaultValue:this.props.asans.title}}
                component={renderTextField}
              />
              <Field
                label="Время"
                name="duration"
                custom={{required:false, className:classes.inputSmall, defaultValue:this.props.asans.duration}}
                component={renderTextField}
              />
              <Field
                label="Ноги"
                name="footDistance"
                custom={{required:false, className:classes.inputSmall}}
                component={renderTextField}
              />
              <Field
                label="Позиция"
                name="footPosition"
                custom={{required:false, className:classes.inputSmall}}
                component={renderTextField}
              />
            </Grid>
            <Grid item md={12}>
              <Field
                label="Описание"
                name="description"
                custom={{required:false, className:classes.input, multiline:true, rowsMax:4}}
                component={renderTextField}
              />
              <Field
                label="Фотография"
                name="image"
                custom={{required:false, className:classes.input}}
                component={renderTextField}
              />
            </Grid>
            <Grid item md={12}>
              {this.renderInstructions()}
            </Grid>
            <Grid item md={10}></Grid>
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