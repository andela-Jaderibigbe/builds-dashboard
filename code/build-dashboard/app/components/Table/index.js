import React from 'react';
import PropTypes from 'prop-types';

import styles from './Table.scss';

const Table = ({ className, children }) => {
  className = `${styles.table} ${className}`;
  return <div className={className}>{children}</div>;
};

Table.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array]),
};

export default Table;
