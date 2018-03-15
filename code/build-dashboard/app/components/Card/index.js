import React from 'react';
import PropTypes from 'prop-types';
import NoContent from '../NoContent';
import styles from './Card.scss';

const Card = props => {
  const {
    title,
    children,
    state,
    progress,
    hasError,
    hasContent,
    noContentNessage,
    onClick,
  } = props;

  const getClassName = () => {
    if (state === 'running') return styles.isRunning;

    if (['rejected', 'complete', 'accepted'].includes(state)) {
      if (progress === 100 && hasError) {
        return styles.isError;
      } else if (progress === 100 && !hasError) {
        return styles.isSuccess;
      }
    }

    return styles.isDefault;
  };
  const cardStyle = `${styles.cardContainer} ${getClassName()}`;

  const content = hasContent ? children : <NoContent message={noContentNessage} />;

  return (
    <div className={cardStyle} onClick={onClick}>
      <div className={styles.title}>{title}</div>
      <div className={styles.cardBody}>{content}</div>
    </div>
  );
};

Card.defaultProps = {
  hasContent: true,
  hasError: false,
};

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.object]),
  className: PropTypes.string,
  state: PropTypes.string,
  progress: PropTypes.number,
  hasError: PropTypes.bool,
  hasContent: PropTypes.bool,
  onClick: PropTypes.func,
  noContentNessage: PropTypes.string,
};

export default Card;
