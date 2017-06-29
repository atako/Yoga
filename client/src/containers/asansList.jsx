import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAsans } from '../actions'; 


class AsansList extends Component {

  componentDidMount() {
    this.props.fetchAsans();
  }


  render(){
    return(
      <div>
        List of Asans
      </div>
    );
  }
}



export default connect(null, { fetchAsans })(AsansList);