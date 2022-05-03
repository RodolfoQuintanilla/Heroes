import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
   return (
      <ul >
         <li><Link to="/">Inico</Link></li>
         <li><Link to="/hero">Heroes</Link></li>
      </ul>
   );
};

export default Nav; Nav