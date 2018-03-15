import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';
import Select from 'components/Select';
import styles from './ResultCard.scss';
import { REJECTED, COMPLETE, ACCEPTED } from 'utils/constants';

const deployOptions = [
  { value: 'production', label: 'Production' },
  { value: 'staging', label: 'Staging' },
];

const buildCompleted = (
  <div className={styles.resultBody}>
    <div className={styles.reason}>Complete</div>
    <div className={styles.control}>
      <Button>Deploy</Button>
      <div className={styles.divider}>To</div>
      <Select
        name="envDev"
        labelKey="label"
        valueKey="value"
        defaultValue="production"
        options={deployOptions}
      />
    </div>
  </div>
);

const buildAccepted = (
  <div className={`${styles.resultBody} ${styles.accepted}`}>
    <div className={styles.subTitle}>Change Accepted</div>
    <div className={styles.reason}>Auto-Merged</div>
    <Button>
      <span>
        <i className="fa fa-search" />
        Merged Build
      </span>
    </Button>
  </div>
);

const buildRejected = (
  <div className={styles.resultBody}>
    <div className={styles.subTitle}>Change Rejected</div>
    <div className={styles.reason}>Metrics Reduction</div>
    <Button>Find Issues</Button>
  </div>
);

const buildNoResult = (
  <div className={styles.resultBody}>
    <div className={styles.reason}>No Result</div>
  </div>
);

const ResultCard = ({ state }) => {
  const getContent = state => {
    switch (state) {
      case COMPLETE:
        return buildCompleted;
      case ACCEPTED:
        return buildAccepted;
      case REJECTED:
        return buildRejected;
      default:
        return buildNoResult;
    }
  };
  return (
    <div className={styles.resultContainer}>
      <div className={styles.resultHeader}>Result:</div>
      {getContent(state)}
    </div>
  );
};

ResultCard.propTypes = {
  state: PropTypes.string,
};

export default ResultCard;
