import getLevel from '../app';
import fetchData from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('getLevel - status success', () => {
  fetchData.mockReturnValue({ status: 'ok', level: 2 });
  expect(getLevel(2)).toBe('Ваш текущий уровень: 2');
});

test('getLevel - status error', () => {
  fetchData.mockReturnValue({ status: 'error' });
  expect(getLevel(2)).toBe('Информация об уровне временно недоступна');
});

test('getLevel - wrong object key', () => {
  fetchData.mockReturnValue({ status_: 'ok', level_: 2 });
  expect(getLevel(2)).toBe('Информация об уровне временно недоступна');
});

test('getLevel - empty object', () => {
  fetchData.mockReturnValue({});
  expect(getLevel(2)).toBe('Информация об уровне временно недоступна');
});

test('getLevel - non object', () => {
  fetchData.mockReturnValue(true);
  expect(getLevel(2)).toBe('Информация об уровне временно недоступна');
});

test('getLevel - throw', () => {
  fetchData.mockImplementation(() => {
    throw new Error();
  });
  expect(getLevel(2)).toBe('Информация об уровне временно недоступна');
});
