import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteAsana, getAsana, switchToEdit } from '../actions';
import AsanaEdit from '../components/asanaEdit';


class FullAsana extends Component {

  componentDidMount() {
    this.props.getAsana(this.props.match.params.id);
  }

  onDeleteClick() {
    const { id } = this.props.match.params;
    this.props.deleteAsana(id, () => {
      this.props.history.push('/');
    });
  }

  render(){
    const asana = this.props.asans;
    if (!asana) {
      return (
        <div>Loading...</div>
      );
    }


    return (
      <div className="row">
      <div className="small-11 columns">
        <div className="columns">
          <ul className="accordion" data-accordion data-allow-all-closed="true">  
            <li className="accordion-item" data-accordion-item>
              <a href='#' className="accordion-title">
                <div className = "media-object">
                  <div className="media-object-section">
                    <img width = "200" height="200" className="thumbnail" src={this.props.asans.image}/>
                  </div>
                  <div className="media-object-section">
                    <h4>{this.props.asans.title}</h4>
                    {!this.props.asans.footDistance ? '' : <span className="secondary label">Ширина ног {this.props.asans.footDistance}</span>}
                    {!this.props.asans.footPosition ? '' : <span className="success label">Позиция ног {this.props.asans.footPosition}</span>}
                    {!this.props.asans.duration ? '' : <span className="primary label">Время {this.props.asans.duration}</span>}
                    <h5>{this.props.asans.description}</h5>
                    <button type="button" className="alert button" onClick={this.onDeleteClick.bind(this)}>Delete</button>
                    <Link to={`/asans/edit/${this.props.asans._id}`} className="button">Edit</Link>
                  </div>
                  </div>
              </a>
            </li>
          </ul>
        </div>
    </div>
    </div>
    );
  }
}

function mapStateToProps(state) {
  return { asans: state.asans };
}


export default connect(mapStateToProps, { deleteAsana, getAsana })(FullAsana);
