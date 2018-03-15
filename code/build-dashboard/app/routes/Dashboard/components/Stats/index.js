import React from 'react';
import PropTypes from 'prop-types';
import MetricsCard from '../MetricsCard';
import BuildCard from '../BuildCard';
import TestCard from '../TestCard';
import ResultCard from '../ResultCard';
import { getError, hasContent } from '../../selector';
import styles from './Stats.scss';

const Stats = props => {
  const { state, progress, stats } = props;

  const { metrics = {}, build = {}, unit_test = {}, functional_test = {} } = stats;

  return (
    <div className={styles.stats}>
      <MetricsCard
        state={state}
        progress={progress.metrics}
        {...metrics}
        hasError={getError(metrics)}
        hasContent={hasContent(progress.metrics)}
      />
      <BuildCard
        state={state}
        progress={progress.build}
        {...build}
        hasError={getError(build)}
        hasContent={hasContent(progress.build)}
      />
      <TestCard
        title="Unit Test"
        {...unit_test}
        state={state}
        progress={progress.unit_test}
        hasError={getError(unit_test)}
        hasContent={hasContent(progress.unit_test)}
      />
      <TestCard
        title="Functional Test"
        {...functional_test}
        state={state}
        progress={progress.functional_test}
        hasError={getError(functional_test)}
        hasContent={hasContent(progress.functional_test)}
      />
      <ResultCard state={state} />
    </div>
  );
};

Stats.propTypes = {
  stats: PropTypes.object,
  state: PropTypes.string,
  progress: PropTypes.object,
};

export default Stats;
