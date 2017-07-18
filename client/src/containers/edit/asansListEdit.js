import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAsans, addAsana } from '../../actions'; 


import AsanaEdit from '../../components/edit/asana';


class AsansEditList extends Component {
  
  componentDidMount() {
    this.props.fetchAsans();

  }

  renderAsans() {
    return _.map(this.props.asans, asana => {
      return <AsanaEdit key={asana._id} asana={asana} history={this.props.history}/>
    });
  }


  render(){
    const asans = this.props.asans;

    if(_.isEmpty(asans)) {
      return (
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
  return { asans: state.asans };
}

export default connect(mapStateToProps, { fetchAsans, addAsana })(AsansEditList);