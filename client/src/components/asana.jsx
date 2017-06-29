import React from 'react';

import AsanaDetail from './asanaDetail';
import { addAsana } from '../actions';

const Asana = (props) => {

const listAsansDetails = !props.asana.detail ? 'No details' : props.asana.detail.map((detail) =><AsanaDetail detail={detail} /> )

const testAdd = () => {
  addAsana();
}

  return (
    <div className="row">
      <div className="small-1 columns">
        <button className="button" onClick={testAdd}>Произнести</button>
      </div>
      <div className="small-11 columns">
        <div className="columns">
          <ul className="accordion" data-accordion data-allow-all-closed="true">  
            <li className="accordion-item" data-accordion-item>
              <a href='#' className="accordion-title">
                <div className = "media-object">
                  <div className="media-object-section">
                    <img width = "200" height="200" className="thumbnail" src={props.asana.image}/>
                  </div>
                  <div className="media-object-section">
                    <h4>{props.asana.title}</h4>
                    {!props.asana.footDistance ? '' : <span className="secondary label">Ширина ног {props.asana.footDistance}</span>}
                    {!props.asana.footPosition ? '' : <span className="success label">Позиция ног {props.asana.footPosition}</span>}
                    {!props.asana.duration ? '' : <span className="primary label">Время {props.asana.duration}</span>}
                    <h5>{props.asana.description}</h5>
                  </div>
                  </div>
              </a>
              <div className="accordion-content" data-tab-content>
                {listAsansDetails}
              </div>
            </li>
          </ul>
        </div>
    </div>
    </div>
    )
}

 export default Asana;

