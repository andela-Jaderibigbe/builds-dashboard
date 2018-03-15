import React from 'react';
import PropTypes from 'prop-types';
import styles from './Cell.scss';

const Cell = ({ className, children, isHidden }) => {
  className = `${styles.cell} ${className}`;
  return <div className={className}>{!isHidden ? children : null}</div>;
};

Cell.defaultProps = {
  isHidden: false,
};

Cell.propTypes = {
  className: PropTypes.string,
  isHidden: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default Cell;
