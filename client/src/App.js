import React from 'react';
import Home from './components/Home';
import MyFriends from './components/MyFriends';
import Blogs from "./components/Blogs"
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import HelpFile from './components/Help';
import Login from './components/Login';
import Register from './components/Register';
import FetchUser from './components/FetchUser';
import ProtectedRoute from './components/ProtectedRoute';
import { Switch, Route } from 'react-router-dom';
import { Container, } from 'semantic-ui-react'; 

const App = () => (
  <>
  <Navbar />
  <FetchUser>
  <Container>
    <Switch>
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/blogs" component={Blogs} />
      <ProtectedRoute exact path='/myfriends' component={MyFriends} />
      <Route exact path="/helpfile" component={HelpFile} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route component={NoMatch} />
    </Switch>
  </Container>
  </FetchUser>
  </>
)
export default App;
