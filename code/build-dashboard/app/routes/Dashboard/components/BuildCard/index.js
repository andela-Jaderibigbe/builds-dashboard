import React from 'react';
import PropTypes from 'prop-types';
import Card from 'components/Card';
import { formatBuildDate } from 'utils';
import styles from './BuildCard.scss';

const BuildCard = props => {
  const { state, progress, hasError, build_date, hasContent } = props;

  const renderContent = (
    <span>
      <div className={styles.stat}>
        <span className={styles.statItem}>
          <i className="fa fa-laptop" />
          <span className={styles.labelText}>Debug</span>
        </span>
        <span className={styles.statItem}>
          <i className="fa fa-laptop" />
          <span className={styles.labelText}>Release</span>
        </span>
      </div>
      <div className={styles.bottomLabel}>{formatBuildDate(build_date)}</div>
    </span>
  );

  return (
    <Card
      title="Build"
      state={state}
      progress={progress}
      hasError={hasError}
      hasContent={hasContent}
    >
      {renderContent}
    </Card>
  );
};

BuildCard.propTypes = {
  build_date: PropTypes.string,
  state: PropTypes.string,
  progress: PropTypes.number,
  hasError: PropTypes.bool,
  hasContent: PropTypes.bool,
};

export default BuildCard;
