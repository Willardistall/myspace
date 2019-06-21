import React from 'react';
import axios from 'axios';
import { Card, Header, Image, Icon } from 'semantic-ui-react';

class MyFriends extends React.Component {
  state = { friends: [], };

  componentDidMount() {
    axios.get('/api/myfriends')
    .then( res => this.setState({ friends: res.data, }))
  };

  render() {

    return(
      <div>
        <Header as='h1' icon textAlign='center'>
      <Icon name='users' circular />
      <Header.Content>Friends</Header.Content>
    </Header>
      <Card.Group itemsPerRow={4}>
        { this.state.friends.map( friend =>
          <Card key={friend.id}>
           <Image src={friend.avatar} />
            <Card.Content>
              <Card.Header>
                { friend.name } 
                <br />
                { friend.age } 
              </Card.Header>
              <Card.Description>
                { friend.gender }
              </Card.Description>
              <Card.Meta>
                {friend.location }
              </Card.Meta>
              </Card.Content>
          </Card>
        )}
      </Card.Group>
      </div>
    )
  }
}

export default MyFriends;