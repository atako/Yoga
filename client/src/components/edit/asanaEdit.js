import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, FieldArray } from 'redux-form';
import PropTypes from 'prop-types';

import { withStyles, createStyleSheet } from 'material-ui/styles';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import IconButton from 'material-ui/IconButton';

import DeleteIcon from 'material-ui-icons/Delete';
import AddIcon from 'material-ui-icons/Add';


import { getAsana, updateAsana } from '../../actions';

const renderTextField = ( { input, label, meta: {touched, error}, custom }) => {
    return(<TextField
      label={label}
      {...input}
      {...custom}
    />
  )
};

const renderInstructions = ({ fields, meta: { error, submitFailed } }) =>
  <div>
    {fields.map((instruction, index) => 
        <div key={index}>
        <Field
          name={`${instruction}.title`}
          type="text"
          component={renderTextField}
          label={`${index+1}`}
        />
        <IconButton aria-label="Add to favorites" onClick={() => fields.remove(index)}>
          <DeleteIcon />
        </IconButton>
        </div>
    )}
    <div>
      <Button fab color="primary" onClick={() => fields.push({})}>
        <AddIcon />
      </Button>
      {submitFailed &&
        error &&
        <span>
          {error}
        </span>}
    </div>
  </div>



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
    this.handleInitialize();
  }

handleInitialize() {
  const initData = this.props.getAsana(this.props.match.params.id).then(result => result.payload.data);
  this.props.initialize(initData);
}
  
  onSubmit(values) {
    this.props.updateAsana(this.props.asans._id, values, () => {
      this.props.history.push(`/asana/all`);
    });
  }

  render() {
    const classes = this.props.classes;
    const { handleSubmit } = this.props;

    if(_.isEmpty(this.props.asans)) {
      return (
        <div> Loading...</div>
      )
    };

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
                    custom={{required:false, className:classes.input}}
                    component={renderTextField}
                  />
                  <Field
                    label="Время"
                    name="duration"
                    custom={{required:false, className:classes.inputSmall}}
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
                <Grid item md={2}>
                </Grid>
                <Grid item md={12}>
                  <FieldArray label="array" name='instructions' component={renderInstructions}/>  
                </Grid>
                <Grid>
                  <div>
                    <Button>
                      <input type="file" onChange={this.handleUploadFile} />
                    </Button>
                  </div>
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
}

const validate = (values) => {
  const errors = {};

  // if(!values.title || values.title.length < 3) {
  //   errors.title = "Enter a title is at least 3 characters!";
  // }

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
  form: 'editAsana',
  enableReinitialize: true
  // keepDirtyOnReinitialize: true
}))(connect(mapStateToProps, { getAsana, updateAsana })(withStyles(styleSheet)(EditAsana)));
