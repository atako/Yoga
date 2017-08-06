import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility,
  Item
} from 'semantic-ui-react'

const FixedMenu = () => (
  <Menu fixed='top' size='large'>
    {/* <Container>
      <Menu.Item as='a' active>Homee</Menu.Item>
      <Menu.Item as='a'>Plan</Menu.Item>
      <Menu.Item as='a'>About</Menu.Item>
      <Menu.Menu position='left'>
      </Menu.Menu>
    </Container> */}
  </Menu>
)

export default class Landing extends Component {

  // state = {}
  
  // hideFixedMenu = () => this.setState({ visible: false });
  // showFixedMenu = () => this.setState({ visible: true });

  render() {
    // const { visible } = this.state
    return(
      <div>
      {/* { visible ? <FixedMenu /> : null } */}
      
      <Visibility
        onBottomPassed={this.showFixedMenu}
        onBottomVisible={this.hideFixedMenu}
        once={false}
      >
        <Segment
          inverted
          style={{ minHeight: 900, padding: '1em 0em', backgroundColor: "#8A72B6", textAlign: 'left' }}
          vertical
        >
        <Grid>
        <Grid.Row>
          <Grid.Column width={5}>
            <div
              style ={{ marginLeft: '4em', marginTop: '1em', marginBottom: '4em'}}
              >
              <div
                style={{ display: 'inline-block', fontSize: '2em', color: '#ffffff'}}>
                  <a style={{ color: '#ffffff' }} href='https://onlineyoga.space'>online</a></div>
              <div
                style ={{ display: 'inline-block', fontSize: '2em', color: '#FFC80A'}}>
                <a style={{ color: '#ffc80a' }} href='https://onlineyoga.space'>yoga.space</a></div>
            </div>
          </Grid.Column>
          <Grid.Column width={7}></Grid.Column>
          <Grid.Column width={4}>
          <Container>
            <Menu inverted text size='large' compact>
              {/* <Menu.Item as='p' style={{ fontFamily: 'Lato:300' }} active>home</Menu.Item> */}
              {/* <Menu.Item as='a' onClick={() => this.props.history.push('/plan/')}>plan</Menu.Item> */}
              <Menu.Item as='a' href="#about">about</Menu.Item>
            </Menu>
          </Container>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={8}>
          <div 
            style={{ fontFamily: 'Open Sans: 300', fontSize: '1em' , marginTop: '2em' }}>
            33 WEEKS TRAINIG PLAN</div>
          </Grid.Column>
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={4}></Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={8}>
          <Container text>
            <div
              style={{ fontFamily: 'Open Sans', fontSize: '6em', lineHeight: '1em' }}>
              Online Yoga Course
            </div>
            <Button
              primary size='large' 
              style={{marginBottom: 0, marginTop: '5em', backgroundColor: '#FFC80A' }}
              onClick={() => this.props.history.push('/plan/first_class')}>
                <div style={{ color: '#000000',  fontSize: '1.2em', fontFamily: 'Open Sans:300' }}>Start Your First Practice</div>
              
              </Button>
          </Container>
          </Grid.Column>
          <Grid.Column width={3}>
          <div style={{ marginTop: '0em', fontSize: '1.1em', lineHeight: '1.7em' }}>
            <div><a href="https://www.amazon.com/Light-Yoga-B-K-Iyengar/dp/0805210318"><img style={{ height: '250px' }} src="/img/book.jpg"></img></a></div>
            <div style={{ fontFamily: 'Open Sans: 300' }}>Based on book</div>
            <div style={{ fontFamily: 'Open Sans: 300' }}>“Light on Yoga: Yoga Dipika”</div>
            <div style={{ fontFamily: 'Open Sans: 300' }}>of B. K. S. Iyengar</div>
          </div>
          </Grid.Column>
          <Grid.Column width={3}></Grid.Column>
        </Grid.Row>
        </Grid>
        </Segment>
      </Visibility>

      <Segment style={{ padding: '8em 0em' }} vertical>
        <Grid as='a' name='about' container stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as='h3' style={{ fontSize: '2em' }}>If you practice Iyengar yoga, this site will be your personal instructor</Header>
              <p style={{ fontSize: '1.33em' }}>
                Yoga classes on our website are based on the legendary book in the world of yoga. You will have a 33-week lesson plan.

              </p>
              
            </Grid.Column>
            <Grid.Column floated='right' width={6}>
              <Image
                bordered
                size='large'
                src='/img/landing_3.jpg'
              />
            </Grid.Column>
          </Grid.Row>
          {/* <Grid.Row>
            <Grid.Column textAlign='center'>
              <Button size='huge'>Check Them Out</Button>
            </Grid.Column>
          </Grid.Row> */}
        </Grid>
      </Segment>
      <Segment style={{ padding: '0em' }} vertical>
        <Grid celled='internally' columns='equal' stackable>
          <Grid.Row textAlign='center'>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header as='h3' style={{ fontSize: '2em' }}>“Yoga allows you to find a new kind of freedom that you may not have known even existed”</Header>
              <p style={{ fontSize: '1.33em' }}>
                <Image avatar src='/img/landing_02.jpg' />
                  B.K.S. Iyengar
              </p>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header as='h3' style={{ fontSize: '2em' }}>“My Body Is My Temple And Asanas Are My Prayers”</Header>
              <p style={{ fontSize: '1.33em' }}>
                <Image avatar src='/img/landing_02.jpg' />
                 B.K.S. Iyengar
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
     
      <Segment inverted vertical style={{ padding: '5em 0em' }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='About' />
                <List link inverted>
                  {/* <List.Item as='a'>Sitemap</List.Item>
                  <List.Item as='a'>Contact Us</List.Item>
                  <List.Item as='a'>Religious Ceremonies</List.Item>
                  <List.Item as='a'>Gazebo Plans</List.Item> */}
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='Services' />
                <List link inverted>
                  {/* <List.Item as='a'>Banana Pre-Order</List.Item>
                  <List.Item as='a'>DNA FAQ</List.Item>
                  <List.Item as='a'>How To Access</List.Item>
                  <List.Item as='a'>Favorite X-Men</List.Item> */}
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header as='h4' inverted>Footer Header</Header>
                <p></p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </div>
    );
  }

}
