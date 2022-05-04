import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
   return (
      <nav className="navbar">

         <div className="navbar__logo">
            Rorro App
         </div>

         <div>
            <ul className='navbar__lista'>
               <li ><Link className="navbar__link" to="/">Inico</Link></li>
               <li ><Link className="navbar__link" to="/hero">Heroes</Link></li>
            </ul>
         </div>

      </nav>

   );
};

export default Nav; 