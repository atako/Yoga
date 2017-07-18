import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAsans, addAsana } from '../actions'; 


import AsanaRender from '../components/asanaRender';


class AsansList extends Component {
  
  componentDidMount() {
    this.props.fetchAsans();
  }

  renderAsans() {
    return _.map(this.props.asans, asana => {
      return <AsanaRender key={asana._id} asana={asana} />
    });
  }


  render(){
    const asans = this.props.asans;
    
    return(
      <div>
        {this.renderAsans()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { asans: state.asans };
}

export default connect(mapStateToProps, { fetchAsans, addAsana })(AsansList);