import React from 'react';
import PropTypes from 'prop-types';
import styles from './TableRow.scss';

const TableRow = ({ className, children }) => {
  className = `${styles.tableRow} ${className}`;
  return <div className={className}>{children}</div>;
};

TableRow.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default TableRow;
