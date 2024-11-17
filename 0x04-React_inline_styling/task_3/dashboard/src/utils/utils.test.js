import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('getFullYear', () => {
  test('returns the current year', () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toBe(currentYear);
  });
});

describe('getFooterCopy', () => {
  test('returns "Holberton School" when argument is true', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
  });

  test('returns "Holberton School main dashboard" when argument is false', () => {
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
  });
});

describe('getLatestNotification', () => {
  test('returns the correct HTML string', () => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
  });
});
