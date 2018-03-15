import React from 'react';
import PropTypes from 'prop-types';
import styles from './ExpandableRow.scss';

const ExpandableRow = (WrappedRow, Details) => {
  const CompositeRow = props => {
    const { isSelected, state, children, className, stats, progress, ...rest } = props;
    const rowStyle = `${className} ${styles.compositeRow}`;

    return isSelected ? (
      <WrappedRow className={rowStyle} {...rest}>
        <div className={styles.details}>{children}</div>
        <div className={styles.stats}>
          <Details stats={stats} state={state} progress={progress} />
        </div>
      </WrappedRow>
    ) : (
      <WrappedRow {...props} />
    );
  };

  CompositeRow.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.object, PropTypes.array]),
    isSelected: PropTypes.bool,
    state: PropTypes.string,
    className: PropTypes.string,
    stats: PropTypes.object,
    progress: PropTypes.object,
  };

  return CompositeRow;
};

export default ExpandableRow;
