import React from 'react';
import PropTypes from 'prop-types';
import styles from './TableBody.scss';

const TableBody = ({ className, children }) => {
  className = `${styles.table} ${className}`;
  return <div className={className}>{children}</div>;
};

TableBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default TableBody;
