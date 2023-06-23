import { Auth } from './local-auth.guard';

describe('Auth', () => {
  it('should be defined', () => {
    expect(new Auth()).toBeDefined();
  });
});
