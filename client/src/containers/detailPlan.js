import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPlanDetail } from '../actions';
import AsanaRender from '../components/asanaRender';

import { Dimmer, Loader, Image, Segment, Grid, Button, Icon, Item, Label, Menu, Container } from 'semantic-ui-react'

class PlanDetail extends Component {

componentDidMount() {
  this.props.getPlanDetail(this.props.match.params.id);
}

renderAsans() {
  return (
    <Segment
      style = {{ backgroundColor: "#8A72B6"}}>
      <Grid>
        <Grid.Row  >
              <Grid.Column width ={5}>
              <div
              style ={{ marginLeft: '4em', marginTop: '2em', marginBottom: '1em'}}
              >
              <div
                style={{ display: 'inline-block', fontSize: '2em', color: '#ffffff'}}>
                  <a style={{ color: '#ffffff' }} href='http://alpha.onlineyoga.space'>online</a></div>
              <div
                style ={{ display: 'inline-block', fontSize: '2em', color: '#FFC80A'}}>
                <a style={{ color: '#ffc80a' }} href='http://alpha.onlineyoga.space'>yoga.space</a></div>
              </div>
            </Grid.Column>
            <Grid.Column width = {9}>
            <div
              style={{ display: 'inline-block', fontSize: '2em', color: '#ffffff', marginLeft: '4em', marginTop: '1em', marginBottom: '1em'}}>
              Start your first practice
            </div>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row style = {{ backgroundColor: "#ffffff"}}>
          <Grid.Column width={3}>
          </Grid.Column>
          <Grid.Column width={10}>
            <Item.Group divided>
              {
                  this.props.plans.asans.map(asana => { 
                  return <AsanaRender key={asana._id} asana={asana} /> 
                })
              }
       </Item.Group> 
          </Grid.Column>
          <Grid.Column width={3}>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  //   <Grid celled>
  //         <Grid.Row>
  //           <Grid.Column width={16}>
  //           <Segment
  //           inverted
  //           style = {{padding: '1em 0em', backgroundColor: "#8A72B6", textAlign: 'left' }}
  //           vertical
  //           >
  //         <Grid.Column width={5}>
  
  //         </Grid.Column>
  //         <Grid.Column width={7}></Grid.Column>
  //         <Grid.Column width={4}>
  //         <Container>
  //           <Menu inverted text size='large' compact>
  //             <Menu.Item as='p' style={{ fontFamily: 'Lato:300' }} active>home</Menu.Item>
  //             <Menu.Item as='a' onClick={() => this.props.history.push('/plan/')}>plan</Menu.Item>
  //             <Menu.Item as='a'>about</Menu.Item>
  //           </Menu>
  //         </Container>
  //         </Grid.Column>
  //         </Segment>
  //           </Grid.Column>
  //         </Grid.Row>
  //         <Grid.Column>
  //     <Grid.Row>
  //     <Grid.Column width={12}>
  //       <Item.Group divided>
  //         {
  //           this.props.plans.asans.map(asana => {
  //             return <AsanaRender key={asana._id} asana={asana} /> 
  //           })
  //         }
  //       </Item.Group>
  //     </Grid.Column>
  //     </Grid.Row>
  //     </Grid.Column>
  //     <Grid.Column>

  //     </Grid.Column>
  //   </Grid>
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