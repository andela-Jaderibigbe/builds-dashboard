import { isEmpty } from 'lodash';

const stateDisplay = {
  running: 'Running',
  pending: 'Pending',
  rejected: 'Rejected',
  complete: 'Complete',
  accepted: 'Accepted',
};

const statDisplay = {
  metrics: 'Metrics',
  build: 'Build',
  unit_test: 'Unit Test',
  functional_test: 'Functional Test',
};

export const statToDisplay = key => statDisplay[key];

export const stateToDisplay = key => stateDisplay[key];

// simple util function to check if stats value has dropped
export const hasDrop = obj => {
  return Object.keys(obj).reduce((memo, key) => {
    return memo || obj[key] < 0;
  }, false);
};

export const valueDrop = value => value < 0;

export const getError = val => {
  return !isEmpty(val) ? hasDrop(val) : false;
};

export const hasContent = val => val > 0;
