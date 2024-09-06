import { hello } from '@osamu_takeuchi/mypackage';

describe('mypackage.hello', () => {
  it('says hello', () => {
    expect(hello()).toBe('Hello!');
  });
});
