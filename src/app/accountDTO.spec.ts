import { Account } from './accountDTO';

describe('Account', () => {
  it('should create an instance', () => {
    expect(new Account(1, "test", "test")).toBeTruthy();
  });
});
