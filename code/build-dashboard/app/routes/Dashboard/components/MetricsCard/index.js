import React from 'react';
import PropTypes from 'prop-types';
import Card from 'components/Card';
import { valueDrop } from '../../selector';
import styles from './MetricsCard.scss';

const MetricsCard = props => {
  const {
    state,
    progress,
    hasError,
    test,
    maintainability,
    security,
    workmanship,
    hasContent,
  } = props;

  const renderStat = (value, stableClass, dropClass, stableIcon, dropIcon) => {
    const hasError = valueDrop(value);
    return (
      <span className={`${styles.stats} ${hasError ? dropClass : stableClass}`}>
        {Math.abs(value)}
        {hasError ? <i className={`fa ${dropIcon}`} /> : <i className={`fa ${stableIcon}`} />}
      </span>
    );
  };

  const renderContent = (
    <span>
      <div className={styles.cardSection}>
        <div className={styles.statItem}>
          {renderStat(
            test,
            styles.valueStable,
            styles.valueDrop,
            'fa-arrow-circle-up',
            'fa-arrow-circle-down'
          )}
          <span className={styles.labelText}>Test</span>
        </div>
        <div className={styles.statItem}>
          {renderStat(
            maintainability,
            styles.valueStable,
            styles.valueDrop,
            'fa-arrow-circle-up',
            'fa-arrow-circle-down'
          )}
          <span className={styles.labelText}>Maintainability</span>
        </div>
      </div>
      <div className={styles.cardSection}>
        <div className={styles.statItem}>
          {renderStat(
            security,
            styles.bottomStat,
            styles.valueDrop,
            'fa-arrow-circle-right',
            'fa-arrow-circle-left'
          )}
          <span className={styles.labelText}>Security</span>
        </div>
        <div className={styles.statItem}>
          {renderStat(
            workmanship,
            styles.bottomStat,
            styles.valueDrop,
            'fa-arrow-circle-right',
            'fa-arrow-circle-left'
          )}
          <span className={styles.labelText}>Workmanship</span>
        </div>
      </div>
    </span>
  );

  return (
    <Card
      title="Metrics"
      state={state}
      progress={progress}
      hasError={hasError}
      hasContent={hasContent}
    >
      {renderContent}
    </Card>
  );
};

MetricsCard.propTypes = {
  test: PropTypes.number,
  maintainability: PropTypes.number,
  security: PropTypes.number,
  workmanship: PropTypes.number,
  state: PropTypes.string,
  progress: PropTypes.number,
  hasError: PropTypes.bool,
  hasContent: PropTypes.bool,
};

export default MetricsCard;
