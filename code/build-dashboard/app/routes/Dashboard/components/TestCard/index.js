import React from 'react';
import { PieChart } from 'react-easy-chart';
import PropTypes from 'prop-types';
import Card from 'components/Card';
import { formatCoverage } from 'utils';

import styles from './TestCard.scss';

const TestCard = props => {
  const {
    title,
    state,
    progress,
    hasError,
    coverage,
    covered,
    missed,
    test_passing,
    hasContent,
  } = props;

  const renderContent = () => (
    <span>
      <div className={styles.chartStatsContainer}>
        <div className={styles.pieChartContainer}>
          <PieChart
            labels
            size={100}
            data={[
              { key: `${covered}`, color: '#43A19E', value: covered },
              { key: `${missed}`, color: '#FF9824', value: missed },
            ]}
            styles={{
              '.chart_text': {
                fontSize: '0.8em',
                fill: '#fff',
              },
            }}
          />
        </div>
        <div className={styles.totalTests}>
          <span className={styles.titleText}>{formatCoverage(test_passing)}</span>
          <span className={styles.info}>tests passed</span>
        </div>
      </div>
      <div className={styles.coverageContainer}>
        <span
          className={styles.coverageCovered}
          style={{ width: formatCoverage(coverage), opacity: 1 }}
        />
        <span className={styles.summary}>
          <span className={styles.statsText}>{formatCoverage(coverage)}</span>
          <span className={styles.info}>code covered</span>
        </span>
      </div>
    </span>
  );

  return (
    <Card
      title={title}
      progress={progress}
      state={state}
      hasError={hasError}
      hasContent={hasContent}
    >
      {renderContent()}
    </Card>
  );
};

TestCard.propTypes = {
  title: PropTypes.string,
  coverage: PropTypes.number,
  test_passing: PropTypes.number,
  covered: PropTypes.number,
  missed: PropTypes.number,
  state: PropTypes.string,
  progress: PropTypes.number,
  hasError: PropTypes.bool,
  hasContent: PropTypes.bool,
};

export default TestCard;
