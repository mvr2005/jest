import rev from '../src/index.js';

test('revERSE', () => {
  expect(rev('hello')).toEqual('olleh');
  expect(rev('')).toEqual('');
});
