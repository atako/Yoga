import React from 'react';

const AsanaDetail = (props) => {
  const asanaImage = !props.detail.image ? null : <div className="thumbnail"><img width = "180" height="180" src={props.detail.image} /></div>;
  
  return (
    <div className="row">
      <div className="small-2 columns">
        {asanaImage}
      </div>
      <div className="small-10 columns">
        <h6>{props.detail.key}. {props.detail.description}</h6>
        <br/>
      </div>
    </div>
  )
}

export default AsanaDetail