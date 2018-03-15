import React from 'react';
import PropTypes from 'prop-types';
import styles from './Select.scss';

const Select = ({ name, defaultValue, labelKey, valueKey, defaultOption, options }) => {
  return (
    <select name={name} value={defaultValue} className={styles.selectControl}>
      <option value="">{defaultOption}</option>
      {options.map((option, idx) => {
        return (
          <option key={idx} value={option[valueKey]}>
            {option[labelKey]}
          </option>
        );
      })}
    </select>
  );
};

Select.defaultProps = {
  onChange() {},
};

Select.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.object),
  valueKey: PropTypes.string,
  labelKey: PropTypes.string,
  defaultValue: PropTypes.string,
  defaultOption: PropTypes.string,
};

export default Select;
