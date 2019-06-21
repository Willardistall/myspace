import React, {useState, useEffect, } from 'react';
import axios from 'axios';
import { Link, } from 'react-router-dom';
import { Header, Image, Card, Button, Icon, Segment } from 'semantic-ui-react';

const Home = () => {
  const [friends, setFriends] = useState([]);

  useEffect( () => {
    axios.get("/api/friends")
    .then( res => setFriends(res.data) )
  }, []);

  const sample = () => {
    if (friends.length) {
      const index = Math.floor(Math.random() * friends.length);
      return friends[index];
    } else {
      return null;
      }; 
    };

    const downVote = (id) => {
      setFriends(friends.filter(c => c.id !== id ));
    };

    const upVote = (id) => {
      axios.put(`/api/friends/${id}`)
      .then ( () => setFriends(friends.filter( c=> c.id !== id )) )
    };

    const friend = sample ();
    if (friend) {
      return (
        <div>
          <Header as='h1' textAlign='center'>OUR SPACE</Header>
          <Header as='h3' icon textAlign='center'>
      <Icon name='users' massive circular />
      <Header.Content>A Place for Friends</Header.Content>
    </Header>
          <br />
          <Segment>
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
          <Card.Content extra>
            <Button color="red" icon basic onClick={() => downVote(friend.id)}>
            <Icon name="delete" /> DENY <Icon name="delete" />
            </Button>
            <Button color="green" icon basic onClick={() => upVote(friend.id)}>
              <Icon name="plus" /> ADD <Icon name="plus" />
            </Button>
          </Card.Content>
          </Card>
          <Link to="/myfriends">
            <Button color="blue">
              View Friends
            </Button>
          </Link>
          <div>
            RECENT POSTS
          </div>
          </Segment>
          <div>

          </div>
        </div>
      );
    } else {
      return <Header textAlign="center"> No Friends :/ </Header>
      }
    };

export default Home;
