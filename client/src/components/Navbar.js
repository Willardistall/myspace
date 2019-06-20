import React, { useContext, } from 'react';
import { AuthContext, AuthConsumer } from "../providers/AuthProvider";
import { Menu, } from 'semantic-ui-react';
import { Link, withRouter, } from 'react-router-dom'

const Navbar = (props) => {
  const auth = useContext(AuthContext)

  const rightNavItems = () => {
    const { location, history, } = props;

    if (auth.user) {
      return (
        <Menu.Menu position="right">
          <Menu.Item>
            { auth.user.email }
          </Menu.Item>
          <Menu.Item
            name="Logout"
            onClick={ () => auth.handleLogout(history) }
          />
        </Menu.Menu> 
      );
    } else {
      return (
        <Menu.Menu position="right">
          <Link to="/login">
            <Menu.Item 
              id='login'
              name="Login"
              active={location.pathname === "/login"}
            />
          </Link>
          <Link to="/register">
            <Menu.Item 
              id='register'
              name="Register"
              active={props.location.pathname === "/register"}
            />
          </Link>
        </Menu.Menu>
      );
    };
  };

  return (
    <AuthConsumer>
      { auth => 
        <Menu pointing secondary>
          <Link to="/">
            <Menu.Item 
              name="Home"
              active={props.location.pathname === "/"}
            />
          </Link>
          <Link to="/myfriends">
            <Menu.Item 
              name="Friends"
              active={props.location.pathname === "/myfriends"}
            />
          </Link>
          <Link to='/blogs'> 
          <Menu.Item
          name='Blogs'
          id='Blogs'
          active={props.location.pathname === '/blogs'}
          />
          </Link>
          { rightNavItems(auth) }
        </Menu>
      }
    </AuthConsumer>
  );
};

export default withRouter(Navbar);