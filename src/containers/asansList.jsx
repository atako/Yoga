import React from 'react';
import { connect } from 'react-redux';

import Asana from '../components/asana';

const asansList = ({ asana }) => {
  // console.log(asana);
    const listAsans = asana[0].firstScreen.map((asana) => 
      <Asana key={asana.key} asana={asana} />
    );
    return (
      <div>
        {listAsans}
      </div>
      );
  
}

const mapStateToProps = state => {
  return {
    asana : state
  }
}

export default connect(mapStateToProps)(asansList)
