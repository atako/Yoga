import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPlanDetail } from '../actions';
import Asana from '../components/asana';

class PlanDetail extends Component {

componentDidMount() {
  this.props.getPlanDetail(this.props.match.params.id);
}

renderAsans() {
  return _.map(this.props.asans.asans, asana => {
    return <Asana key={asana._id} asana={asana} />
  });
}

render() {
  const list = this.props.asans;

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
  return { asans: state.asans }
}

export default connect(mapStateToProps, { getPlanDetail })(PlanDetail);