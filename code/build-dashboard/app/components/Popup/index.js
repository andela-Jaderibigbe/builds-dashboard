import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import $ from 'jquery';
import { callSafely } from 'utils';

import styles from './Popup.scss';

const selCanToggle = props => props.visible === undefined;

/*
  Popup should be managed using visible property,
  show/hide func will only be enabled when visible is empty
*/
class Popup extends Component {
  constructor(props) {
    super(props);

    let { visible } = props;

    if (visible === undefined) {
      visible = false;
    }

    this.state = { visible };
    this.hide = this.hide.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    let { visible } = nextProps;
    if (visible !== undefined) {
      this.setState({ visible });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    let { visible } = this.state;
    if (prevState.visible !== this.state.visible) {
      if (visible) {
        $('body').css('overflow-y', 'hidden');
      } else {
        setTimeout(() => {
          $('body').css('overflow-y', 'inherit');
        }, 300);
      }
    }
  }

  componentWillUnmount() {
    $('body').css('overflow-y', 'inherit');
  }

  show() {
    if (selCanToggle(this.props) && !this.state.visible) {
      this.setState({ visible: true });
    }
  }

  hide() {
    if (selCanToggle(this.props) && this.state.visible) {
      this.setState({ visible: false });
    }
    callSafely(this.props.onHide);
  }

  render() {
    let { children, className } = this.props;
    let { visible } = this.state;

    let items = visible
      ? [
          <div key="popup" className={`${styles.cpuContent} ${className}`}>
            {children}
          </div>,
        ]
      : [];

    let backdrop = visible ? <div className={styles.popupBackdrop} onClick={this.hide} /> : null;

    return (
      <div className={styles.popup}>
        <CSSTransitionGroup
          transitionName="sa-fade"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          {items}
        </CSSTransitionGroup>
        {backdrop}
      </div>
    );
  }
}

Popup.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  className: PropTypes.string,
  visible: PropTypes.bool,
  onHide: PropTypes.func,
};

export default Popup;
