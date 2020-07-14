export const maskString = (input, unmaskedChars = 4, maskingChar = '*') => {
  if (!input) return input;

  const inputStr = input.toString();
  const length = input.length;
  return inputStr
    .split('')
    .map((ch, i) => (i < length - unmaskedChars ? maskingChar : ch))
    .join('');
};
