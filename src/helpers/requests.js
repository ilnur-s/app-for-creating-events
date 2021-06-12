/* eslint-disable no-alert */
const getEventRating = async () => {
  let response;
  try {
    const request = await fetch('https://app-json-file.vercel.app/');
    if (request.ok) {
      response = await request.json();
    } else {
      throw new Error(`Ошибка HTTP: ${request.status}`);
    }
  } catch (error) {
    alert(`Произошла ошибка загрузки данных, текст ошибки: ${error}`);
  }
  return response;
};

export default getEventRating;
