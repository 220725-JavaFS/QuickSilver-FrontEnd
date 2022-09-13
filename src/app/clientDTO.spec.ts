import { Client } from './clientDTO';

describe('Client', () => {
  it('should create an instance', () => {
    expect(new Client(0, "Nigel", "Barnes", "example@example.com", "testUN", "testPW")).toBeTruthy();
  });
});
