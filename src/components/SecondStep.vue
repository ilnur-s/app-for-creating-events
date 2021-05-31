<template>
  <h1 class="step__title">Шаг 2</h1>
  <form class="step-form">
    <div class="step-form__wrapper">
      <div class="warning-block">
        <div class="warning-block__icon">
          <span class="warning-block__span">!</span>
          <div class="warning-block__background"></div>
        </div>
        <span class="warning-block__text">
          Проверьте ваше мероприятие на наличие ошибок,
          если все в порядке - отправляйте на модерацию.
        </span>
      </div>
      <main class="step-form__event event">
        <div class="event__main">
          <div class="event__rating">
            <span class="event__rating-span">16+</span>
            <div class="event__rating-icon"></div>
          </div>
          <div class="event__info">
            <h2 class="event__title">Чайный заголовок — писать не длиннее трёх строк</h2>
            <div class="event__info-item">
              <img src="../assets/img/geo-icon.svg" alt="geo">
              <span class="event__info-span">г. Казань, ул. Волкова, д. 7/29</span>
            </div>
            <div class="event__info-item">
              <img src="../assets/img/calendar-icon.svg" alt="calendar">
              <span class="event__info-span">21 окт. 2019 (пт), 21 окт. 2019 (пт)</span>
            </div>
            <div class="event__info-item">
              <img src="../assets/img/clock-icon.svg" alt="clock">
              <span class="event__info-span">17:30, 16:30</span>
            </div>
            <h3 class="event__contacts">Контакты</h3>
            <div class="event__contacts-item">
              <img src="../assets/img/phone-icon.svg" alt="phone">
              <span class="event__contacts-span">+7 (999) 888-77-66</span>
            </div>
            <div class="event__contacts-item">
              <img src="../assets/img/mail-icon.svg" alt="phone">
              <span class="event__contacts-span">example@mail.com</span>
            </div>
            <div class="event__organizer">
              <h4 class="event__organizer-name">
                Coca-Cola
              </h4>
              <span class="event__organizer-title">Организатор мероприятия</span>
            </div>
          </div>
          <div class="event__cover-wrapper">
            <img class="event__cover" src="" alt="cover">
          </div>
        </div>
        <p class="event__desc desc">
          {{ info.desc }}
        </p>
      </main>
      <div class="nav-buttons">
        <router-link class="nav-buttons__back" to="/">
          Назад
        </router-link>
        <button type="submit" class="nav-buttons__submit">
          Отправить на модерацию
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'SecondStep',
  props: ['info'],
};
</script>

<style lang="scss" scoped>
.step-form__wrapper {
  padding-top: 25px;
}

.warning-block {
  display: flex;
  align-items: center;
  box-shadow: 0px 8px 25px rgba(155, 99, 248, 0.15);
  border-radius: 4px;
  min-height: 90px;
}

.warning-block__icon {
  position: relative;
  margin-left: 25px;
}

.warning-block__span {
  position: absolute;
  font-weight: 700;
  font-size: 2rem;
  line-height: 24px;
  color: #FFFFFF;
  bottom: 11px;
  left: 18px;
}

.warning-block__background {
  height: 45px;
  width: 45px;
  background-color: #FF2998;
  border-radius: 50%;
}

.warning-block__text {
  font-size: 1.125rem;
  line-height: 22px;
  margin-left: 21px;
}

.step-form__event {
  margin-top: 55px;
}

.event__main {
  display: flex;
  flex-wrap: wrap;
}

.event__rating {
  position: relative;
  margin-right: 15px;
}

.event__rating-span {
  position: absolute;
  display: inline-block;
  font-size: 18px;
  line-height: 22px;
  color: #FFFFFF;
  top: 13px;
  left: 13px;
  // margin-left: -24px;
}

.event__rating-icon {
  width: 48px;
  height: 48px;
  background-color: #351767;
}

.event__info {
  display: flex;
  flex-direction: column;
}

.event__title {
  font-weight: 800;
  font-size: 2rem;
  line-height: 39px;
  color: #351768;
  max-width: 415px;
  margin-bottom: 30px;
}

.event__info-item {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  min-height: 15px;
  margin-bottom: 13.5px;
}

.event__info-span {
  margin-left: 15px;
  font-style: normal;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 22px;
  opacity: 0.6;
}

.event__contacts {
  margin: 10px 0 13.5px;
}

.event__contacts-item {
  margin-bottom: 13.5px;
}

.event__contacts-span {
  margin-left: 15px;
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 17px;
  opacity: 0.6;
}

.event__organizer {
  margin-top: 11.5px;
  font-weight: 400;
}

.event__organizer-title {
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  color: #8E69CC;
}

.event__desc {
  margin-top: 30px;
}

.desc {
  font-weight: 400;
  line-height: 24px;
}
</style>
