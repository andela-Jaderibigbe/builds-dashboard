import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableBody from 'components/TableBody';
import BuildItem from '../BuildItem';

import styles from './BuildList.scss';

class BuildList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentRow: null,
    };
  }

  onSelectRow = rowId => {
    let { currentRow } = this.state;
    currentRow = currentRow === rowId ? null : rowId;
    this.setState({ currentRow });
  };

  renderItems() {
    const { data } = this.props;
    const { currentRow } = this.state;

    return data.map(item => (
      <BuildItem
        key={item._id}
        {...item}
        isSelected={item._id === currentRow}
        onSelectItem={this.onSelectRow}
      />
    ));
  }

  render() {
    return <TableBody className={styles.tableBody}>{this.renderItems()}</TableBody>;
  }
}

BuildList.propTypes = {
  data: PropTypes.array,
};

export default BuildList;
