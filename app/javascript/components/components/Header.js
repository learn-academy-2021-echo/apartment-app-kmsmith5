import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap'

class Header extends Component {
  render() {
    const { logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
      ApartmentIndex,
      Home
    } = this.props;
    return (
      <div>
        <NavLink to="/apartments">
              All Apartments
        </NavLink>

        <NavLink to="/">
              Home
        </NavLink>

        <a href={new_user_route}>Create An Account</a>

        {logged_in &&
          <div>
            <a href={sign_out_route}>Sign Out</a>
          </div>
        }
        {!logged_in &&
          <div>
            <a href={sign_in_route}>Sign In</a>
          </div>
        }



      </div>
    );
  }
}
export default Header;
