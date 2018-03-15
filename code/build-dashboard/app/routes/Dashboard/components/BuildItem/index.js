import React from 'react';
import PropTypes from 'prop-types';
import ExpandableRow from 'HOCS/ExpandableRow';
import Cell from 'components/Cell';
import TableRow from 'components/TableRow';
import Progress from 'components/Progress';
import Stats from '../Stats';
import { parseDatetime } from 'utils';
import { stateToDisplay, hasDrop } from '../../selector';
import styles from './BuildItem.scss';

const RowWithDetails = ExpandableRow(TableRow, Stats);

const getIconClassName = state => {
  switch (state) {
    case 'running':
      return 'fa fa-hourglass-half';
    case 'pending':
      return 'fa fa-hourglass-start';
    default:
      return 'fa fa-hourglass-end';
  }
};

const getRowStatus = state => {
  switch (state) {
    case 'running':
      return styles.isRunning;
    case 'pending':
      return styles.isPending;
    case 'rejected':
      return styles.isRejected;
    default:
      return styles.isSuccess;
  }
};

const BuildItem = props => {
  const {
    _id,
    user,
    build_name,
    state,
    progress: { metrics, build, unit_test, functional_test },
    time_started,
    stats,
    isSelected,
    onSelectItem,
  } = props;

  return (
    <RowWithDetails
      isSelected={isSelected}
      stats={stats}
      progress={props.progress}
      className={`${styles.tableRow} ${getRowStatus(state)}`}
      state={state}
    >
      <Cell className={styles.changeListCol}>
        <span className={styles.buildIcon}>
          <i className={getIconClassName(state)} />
          <span className={styles.buildName} onClick={() => onSelectItem(_id)}>
            {build_name}
          </span>
        </span>
      </Cell>
      <Cell className={styles.ownerCol}>{user}</Cell>
      <Cell className={styles.timeCol}>{parseDatetime(time_started)}</Cell>
      <Cell className={styles.stateCol}>{stateToDisplay(state)}</Cell>
      <Cell className={styles.statusCol} isHidden={isSelected}>
        <Progress
          progressValue={metrics}
          progressState={state}
          hasError={hasDrop(stats['metrics'] || {})}
        />
      </Cell>
      <Cell className={styles.statusCol} isHidden={isSelected}>
        <Progress
          progressValue={build}
          progressState={state}
          hasError={hasDrop(stats['build'] || {})}
        />
      </Cell>
      <Cell className={styles.statusCol} isHidden={isSelected}>
        <Progress
          progressValue={unit_test}
          progressState={state}
          hasError={hasDrop(stats['unit_test'] || {})}
        />
      </Cell>
      <Cell className={styles.statusCol} isHidden={isSelected}>
        <Progress
          progressValue={functional_test}
          progressState={state}
          hasError={hasDrop(stats['functional_test'] || {})}
        />
      </Cell>
    </RowWithDetails>
  );
};

BuildItem.propTypes = {
  _id: PropTypes.number,
  user: PropTypes.string,
  build_name: PropTypes.string,
  state: PropTypes.string,
  progress: PropTypes.object,
  time_started: PropTypes.string,
  stats: PropTypes.object,
  isSelected: PropTypes.bool,
  onSelectItem: PropTypes.func,
};

export default BuildItem;
