import React, { Component } from 'react';
import { Accordion, Icon, Container } from 'semantic-ui-react';

class HelpFile extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }
  
  render () {
    const { activeIndex } = this.state 

    return (
      <Container display='center'>
      <Accordion styled > 
      <Accordion.Title active={activeIndex === 0} index ={0} onClick={this.handleClick}>
        <Icon name='dropdown'/>
          My Login isnt working...
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <p>
              Okay...well, mam. Did you reset ur Browser and Cache those cookies mamma? 
              Maybe your caps lock is on?
            </p>
          </Accordion.Content>

          <Accordion.Title active={activeIndex === 1} index ={1} onClick={this.handleClick}>
        <Icon name='dropdown'/>
          Someone hacked my account...
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            <p>
              Who's fault is that Cheryl?? HUH?
            </p>
          </Accordion.Content>

          <Accordion.Title active={activeIndex === 2} index ={2} onClick={this.handleClick}>
        <Icon name='dropdown'/>
          Can I get a refund...
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 2}>
            <p>
              You Wish!
            </p>
          </Accordion.Content>

          <Accordion.Title active={activeIndex === 3} index ={3} onClick={this.handleClick}>
        <Icon name='dropdown'/>
          I need to contact Customer Service
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 3}>
            <p>
              9-1-1
            </p>
          </Accordion.Content>
       </Accordion>
       </Container>
    )
  }
}

export default HelpFile;