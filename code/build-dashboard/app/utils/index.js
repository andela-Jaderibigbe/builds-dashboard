import moment from 'moment';

const DATE_TIME_FORMAT = 'MM/DD/YYYY hh:mm a';
const BUILD_DATETIME_FORMAT = 'hh:mm a - MM/DD/YYYY';

export const parseDatetime = (str, format) => {
  const datetimeFormat = format || DATE_TIME_FORMAT;
  const isValid = moment(str).isValid();
  return isValid ? moment(str).format(datetimeFormat) : str;
};

export const formatBuildDate = str => {
  return parseDatetime(str, BUILD_DATETIME_FORMAT);
};

export const formatCoverage = str => {
  return `${str * 100}%`;
};

export const callSafely = function(func, ...args) {
  if (![undefined, null].includes(func)) {
    return func(...args);
  }
};
