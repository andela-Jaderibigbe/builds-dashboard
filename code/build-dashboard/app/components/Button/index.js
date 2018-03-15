import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.scss';

const Button = props => {
  const { children, onClick, disabled, className } = props;

  return (
    <button
      className={`${styles.buttonContainer} ${className}`}
      onClick={() => onClick()}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  onClick() {},
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;
