import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPlanList } from '../actions';
import { Link } from 'react-router-dom';

import AddIcon from 'material-ui-icons/Add';
import Button from 'material-ui/Button';


class ListOfPlans extends Component {
  
  componentDidMount() {
    this.props.getPlanList();
  }

  renderList() {
      return _.map(this.props.plans, value => {
        return <li key={value._id}><Link to={`/plan/${value.alias}`}>{value.title}</Link></li>
      });

  }

  render() {
    const list = this.props.plans;

    if (_.isEmpty(list)) {
      return(
        <div>Loading...</div>
      )
    };

    return(
      <ul key="key">
        {this.renderList()}
        <Button fab color="primary" onClick={() => this.props.history.push('/plan/new')}>
          <AddIcon />
        </Button>
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return { plans: state.plans }
}

export default connect(mapStateToProps, { getPlanList })(ListOfPlans);



