import { formatDate, maskString } from './utils';

describe('Format Date', () => {
  it('should format date correctly', () => {
    const date = formatDate('2019-06-08T03:37:28 -08:00');
    expect(date).toBe('08 Jun 2019, 03:37 AM');
  });
});

describe('Mask String', () => {
  it('should format date correctly', () => {
    const output = maskString('10000000');
    expect(output).toBe('****0000');
  });

  it('should format date correctly with custom params', () => {
    const output = maskString('10000000', 5, '%');
    expect(output).toBe('%%%00000');
  });
});
