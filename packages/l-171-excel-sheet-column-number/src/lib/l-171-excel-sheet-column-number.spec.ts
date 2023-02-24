import { l171ExcelSheetColumnNumber } from './l-171-excel-sheet-column-number';

describe('171. Excel Sheet Column Number', () => {
  it('Case 1', () => {
    expect(l171ExcelSheetColumnNumber('A')).toEqual(1);
  });
  it('Case 2', () => {
    expect(l171ExcelSheetColumnNumber('AB')).toEqual(28);
  });
  it('Case 3', () => {
    expect(l171ExcelSheetColumnNumber('ZY')).toEqual(701);
  });
});
