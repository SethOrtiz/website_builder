import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
const Navbar = () => (
  <div>
    <ul>
      <li>
        <Link to={ROUTES.SIGN_IN}>Sign In</Link>
      </li>
      <li>
        <Link to={ROUTES.LANDING}>Landing</Link>
      </li>
      <li>
        <Link to={ROUTES.DASHBOARD}>Dashboard</Link>
      </li>
      <li>
        <Link to={ROUTES.WORKSTATION}>Workstation</Link>
      </li>
    </ul>
  </div>
);
export default Navbar;