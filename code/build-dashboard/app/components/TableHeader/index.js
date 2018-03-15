import React from 'react';
import PropTypes from 'prop-types';

import styles from './TableHeader.scss';

const TableHeader = ({ className, children }) => {
  className = `${styles.tableHeader} ${className}`;
  return <div className={className}>{children}</div>;
};

TableHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.node]),
};

export default TableHeader;
