import React from 'react';
import PropTypes from 'prop-types';
import styles from './Progress.scss';

const Progress = ({ progressValue, progressState, hasError }) => {
  const getClassName = () => {
    if (progressState === 'running') return styles.isRunning;

    if (['rejected', 'complete', 'accepted'].includes(progressState)) {
      if (progressValue === 100 && hasError) {
        return styles.isError;
      } else if (progressValue === 100 && !hasError) {
        return styles.isSuccess;
      } else {
        return styles.isDefault;
      }
    }

    return styles.isDefault;
  };

  const progressClass = getClassName();

  return (
    <div className={styles.progressBar}>
      <span className={progressClass} style={{ width: `${progressValue}%`, opacity: 1 }} />
    </div>
  );
};

Progress.propTypes = {
  progressValue: PropTypes.number,
  progressState: PropTypes.string,
  hasError: PropTypes.bool,
};

export default Progress;
