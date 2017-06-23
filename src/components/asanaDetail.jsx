import React from 'react';

const AsanaDetail = (props) => {
  return (
    // <p>{props.detail.key}. {props.detail.description}</p>

    <div className="media-object">
      <div className="media-object-section">
      <div className="thumbnail">
        <img src={props.detail.image} />
      </div>
      </div>
      <div className="media-object-section bottom">
        <h5>{props.detail.key}. {props.detail.description}</h5>
      </div>
    </div>
  )
}

export default AsanaDetail