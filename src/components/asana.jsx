import React from 'react';

import AsanaDetail from './asanaDetail';

const Asana = (props) => {

const listAsansDetails = props.asana.detail.map((detail) =>
      <AsanaDetail detail={detail} />
  );

  return (
    <div className="columns">
      <ul className="accordion" data-accordion data-allow-all-closed="true">  
        <li className="accordion-item" data-accordion-item>
          <a href='#' className="accordion-title">
            <div className = "media-object">
              <div className="media-object-section">
                <img className="thumbnail" src={props.asana.image}/>
              </div>
              <div className="media-object-section">
                <h4>{props.asana.title}</h4>
                <span className="primary label">Время {props.asana.duration}</span>
                <span className="secondary label">Ширина ног {props.asana.footDistance}</span>
                <span className="success label">Позиция ног {props.asana.footPosition}</span>
                <h5>{props.asana.description}</h5>
              </div>
              </div>

          </a>
          <div className="accordion-content" data-tab-content>
            <p>{listAsansDetails}</p>
          </div>
        </li>
      </ul>
    </div>
    
  //   <a href="#" className="accordion-title">Accordion 2</a>
  //   <div className="accordion-content" data-tab-content>
  //     <textarea></textarea>
  //     <button className="button">I do nothing!</button>
  //   </div>
  // </li>
    )
}

 export default Asana

