import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPlanDetail } from '../actions';
import AsanaRender from '../components/asanaRender';

import { Dimmer, Loader, Image, Segment, Grid, Button, Icon, Item, Label } from 'semantic-ui-react'

class PlanDetail extends Component {

componentDidMount() {
  this.props.getPlanDetail(this.props.match.params.id);
}

renderAsans() {
  return (
    <Grid columns='equal'>
      <Grid.Row>
        
      </Grid.Row>
      <Grid.Column>

      </Grid.Column>
      <Grid.Column width={12}>
        <Item.Group divided>
          {
            this.props.plans.asans.map(asana => {
              return <AsanaRender key={asana._id} asana={asana} /> 
            })
          }
        </Item.Group>
      </Grid.Column>
      <Grid.Column>

      </Grid.Column>
    </Grid>
  );
}

render() {
  const list = this.props.plans;

  if (_.isEmpty(list)) {
    return(
      <div>
        <Grid celled>
            <Grid.Row width={10}>
              <Grid.Column width={16}>
                    <Loader active inline='centered' size='large'>Loading</Loader>
              </Grid.Column>
            </Grid.Row>
        </Grid>
      </div>
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
  return { plans: state.plans }
}

export default connect(mapStateToProps, { getPlanDetail })(PlanDetail);