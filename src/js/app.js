/* eslint-disable no-console */

import fetchData from './http';

export default function getLevel(userId) {
  try {
    const response = fetchData(`https://server/user/${userId}`);

    // TODO: логика обработки
    if (response.status === 'ok') {
      return `Ваш текущий уровень: ${response.level}`;
    }
  } catch (error) {
    return 'Информация об уровне временно недоступна';
  }
  return 'Информация об уровне временно недоступна';
}

console.log(getLevel(2));
