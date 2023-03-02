import { Logger } from './l-359-logger-rate-limiter';

describe('359. Logger Rate Limiter', () => {
  it('Case 1', () => {
    const logger = new Logger();
    expect(logger.shouldPrintMessage(1, 'foo')).toBe(true); // return true, next allowed timestamp for "foo" is 1 + 10 = 11
    expect(logger.shouldPrintMessage(2, 'bar')).toBe(true); // return true, next allowed timestamp for "bar" is 2 + 10 = 12
    expect(logger.shouldPrintMessage(3, 'foo')).toBe(false); // 3 < 11, return false
    expect(logger.shouldPrintMessage(8, 'bar')).toBe(false); // 8 < 12, return false
    expect(logger.shouldPrintMessage(10, 'foo')).toBe(false); // 10 < 11, return false
    expect(logger.shouldPrintMessage(11, 'foo')).toBe(true); // 11 >= 11, return true, next allowed timestamp for "foo" is 11 + 10 = 21
  });
});
