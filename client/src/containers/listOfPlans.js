import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPlanList } from '../actions';
import { Link } from 'react-router-dom';

class ListOfPlans extends Component {
  
  componentDidMount() {
    this.props.getPlanList();
  }

  renderList() {
      return _.map(this.props.plans, value => {
        return <li key={value._id}><Link to={`/plan/${value._id}`}>{value.title}</Link></li>
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
      <ul>
        {this.renderList()}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return { plans: state.plans }
}

export default connect(mapStateToProps, { getPlanList })(ListOfPlans);



