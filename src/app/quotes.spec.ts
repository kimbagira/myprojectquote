import { quotes } from './quotes';

describe('Quotes', () => {
  it('should create an instance', () => {
    expect(new quotes(0,'','')).toBeTruthy();
  });
});
