import fetchData from '../http';

test('fetchData throw', () => {
  expect(() => {
    fetchData('url');
  }).toThrowError(new Error('Mock this!'));
});
