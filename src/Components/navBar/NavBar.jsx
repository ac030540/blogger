import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <nav className="flex justify-between bb b--light-green bg-light-green shadow-5">
    <NavLink
      to="/"
      className="dark-blue no-underline flex items-center f5 f3-m f2-l pa3"
    >
      Welcome to the Blogger
    </NavLink>
    <div className="flex-grow pa3 flex items-center">
      <NavLink
        to="/"
        exact
        className="f5-ns f7  dib blue bg-animate hover-bg-washed-red no-underline pv2 ph4 br-pill ba b--blue-20 ma2-ns ma1"
        activeClassName="f5-ns f7 dib blue bg-animate bg-washed-red no-underline pv2 ph4 br-pill ba b--blue-20 ma2-ns ma1"
      >
        Blogs
      </NavLink>
      <NavLink
        to="/create"
        exact
        className="f5-ns f7 dib blue bg-animate hover-bg-washed-red pv2 no-underline ph4 br-pill ba b--blue-20 ma2-ns ma1"
        activeClassName="f5-ns f7 dib blue bg-animate bg-washed-red no-underline pv2 ph4 br-pill ba b--blue-20 ma2-ns ma1"
      >
        Create
      </NavLink>
    </div>
  </nav>
);

export default NavBar;
