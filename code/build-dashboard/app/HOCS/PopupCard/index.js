import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Popup from 'components/Popup';
import NoContent from 'components/NoContent';
import styles from './PopupCard.scss';

const PopupCard = WrappedCard => {
  class ComposedCard extends Component {
    constructor(props) {
      super(props);

      this.state = {
        visible: false,
      };
    }

    toggleVisible = () => {
      const { visible } = this.state;
      this.setState({ visible: !visible });
    };

    render() {
      const { title, children, hasContent, noContentNessage } = this.props;
      const { visible } = this.state;

      const content = hasContent ? children : <NoContent message={noContentNessage} />;

      return (
        <span className={styles.wrapperContainer}>
          <WrappedCard {...this.props} content={content} onClick={() => this.toggleVisible()} />
          <Popup
            className={styles.cardPopup}
            visible={visible && hasContent}
            onHide={() => this.toggleVisible()}
          >
            <div className={styles.popupHeader}>
              <h4>{title}</h4>
              <div
                className={`${styles.close} fa fa-times-circle-o`}
                onClick={() => this.toggleVisible()}
              />
            </div>
            <div className={styles.popupBody}>{content}</div>
          </Popup>
        </span>
      );
    }
  }

  ComposedCard.propTypes = {
    title: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.object, PropTypes.node, PropTypes.array]),
    hasContent: PropTypes.bool,
    noContentNessage: PropTypes.string,
  };

  return ComposedCard;
};

export default PopupCard;
