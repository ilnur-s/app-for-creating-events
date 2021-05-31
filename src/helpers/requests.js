/* eslint-disable no-alert */
const getEventRating = async () => {
  let response;
  try {
    const request = await fetch('http://testwork.rdbx24.ru/api');
    if (request.ok) {
      response = await request.json();
    } else {
      throw new Error(`Ошибка HTTP: ${request.status}`);
    }
  } catch (error) {
    alert(`Произошла ошибка загрузки данных, текст ошибки: ${error}`);
  }
  if (!response) {
    alert('Что-то пошло не так, пожалуйста, попробуйте перезагрузить странцу');
  }
  return response;
};

export default getEventRating;
