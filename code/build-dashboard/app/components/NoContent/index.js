import React from 'react';
import PropTypes from 'prop-types';
import styles from './NoContent.scss';

const NoContent = ({ message }) => {
  return (
    <div className={styles.noContentContainer}>
      <div className={styles.content}>
        <i className="fa fa-bullhorn" />
        <span>{message}</span>
      </div>
    </div>
  );
};

NoContent.defaultProps = {
  message: 'No Result',
};

NoContent.propTypes = {
  message: PropTypes.string,
};

export default NoContent;
