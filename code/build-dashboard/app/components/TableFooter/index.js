import React from 'react';
import PropTypes from 'prop-types';
import styles from './TableFooter.scss';

const TableFooter = ({ className, children }) => {
  className = `${styles.tableFooter} ${className}`;
  return <div className={className}>{children}</div>;
};

TableFooter.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.node]),
};

export default TableFooter;
