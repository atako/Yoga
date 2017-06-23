import React from 'react';

const AsanaDetail = (props) => {
  return (

    <div className="media-object">
      <div className="media-object-section">
      <div className="thumbnail">
        <img width = "180" height="180" src={props.detail.image} />
      </div>
      </div>
      <div className="media-object-section bottom">
        <h5>{props.detail.key}. {props.detail.description}</h5>
      </div>
    </div>
  )
}

export default AsanaDetail