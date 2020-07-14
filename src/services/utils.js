import moment from 'moment';

export const maskString = (input, unmaskedChars = 4, maskingChar = '*') => {
  if (!input) return input;

  const inputStr = input.toString();
  const length = input.length;
  return inputStr
    .split('')
    .map((ch, i) => (i < length - unmaskedChars ? maskingChar : ch))
    .join('');
};

export const formatDate = (dateStr) => {
  return moment(dateStr, 'YYYY-MM-DDThh:mm:ss').format('DD MMM YYYY, hh:mm A');
};
