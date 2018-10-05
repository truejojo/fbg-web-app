import React from 'react';
import { NavLink } from 'react-router-dom';

const HeadNav = () => {
  return (
    <ul>
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink exact to="/spiele">Spiele</NavLink></li>
        <li><NavLink exact to="/datenschutz">Datenschutz</NavLink></li>
        <li><NavLink exact to="/impressum">Impressum</NavLink></li>
      </ul>
  )
}

export default HeadNav;