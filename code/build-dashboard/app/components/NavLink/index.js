import * as React from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';

const NavLink = ({ to, label, styles }) => (
  <Route
    to={to}
    exact
    children={({ location: { pathname } }) => (
      <Link
        to={to}
        className={`${styles.navLink} ${pathname.indexOf(to) !== -1 ? styles.selected : ''}`}
      >
        {label}
      </Link>
    )}
  />
);

NavLink.propTypes = {
  to: PropTypes.string,
  label: PropTypes.string,
  styles: PropTypes.object,
};

export default NavLink;
