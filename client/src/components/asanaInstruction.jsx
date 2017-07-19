import React from 'react';

const AsanaInstruction = (props) => {
  const asanaImage = !props.detail.image ? null : <div className="thumbnail"><img width = "180" height="180" src={props.detail.image} /></div>;
  return (
    <div className="row">
      <div className="small-2 columns">
        {/* {asanaImage} */}
      </div>
      <div className="small-10 columns">
        <h6>{props.detail.title}. {props.detail.description}</h6>
        <br/>
      </div>
    </div>
  )
}

export default AsanaInstruction