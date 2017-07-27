import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPlanDetail } from '../actions';
import AsanaRender from '../components/asanaRender';

class PlanDetail extends Component {

componentDidMount() {
  this.props.getPlanDetail(this.props.match.params.id);
}

renderAsans() {
  console.log(this.props.plans);
  return _.map(this.props.plans.asans, asana => {
    return <AsanaRender key={asana._id} asana={asana} />
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
    <div>
      {this.renderAsans()}
    </div>
  );
}
}


const mapStateToProps = (state) => {
  return { plans: state.plans }
}

export default connect(mapStateToProps, { getPlanDetail })(PlanDetail);