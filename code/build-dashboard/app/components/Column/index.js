import React from 'react';
import PropTypes from 'prop-types';
import styles from './Column.scss';

const Column = ({ className, children }) => {
  className = `${styles.column} ${className}`;
  return <div className={className}>{children}</div>;
};

Column.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default Column;
