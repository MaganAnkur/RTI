import {getYear} from 'utils/helpers/date-helper';

describe('getYear function', () => {
  it('should return the correct year', () => {
    const inputDate = '2022-01-01';
    const result = getYear(inputDate);
    expect(result).toEqual(2022);
  });

  it('should handle invalid input', () => {
    const invalidDate = 'invalid';
    const result = getYear(invalidDate);
    expect(result).toBeNaN();
  });
});
