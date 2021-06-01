<template>
  <h1 class="step__title">Шаг 1</h1>
  <form class="step-form">
    <div class="step-form__wrapper">
      <div class="step-form__item">
        <h2 class="step-form__item-title">Информация об организаторе</h2>
        <div class="step-form__item-wrapper">
          <label for="step-form__input-organization" class="step-form__item-label">
            Организатор
          </label>
          <input
          @blur="v$.info.org.$touch"
          v-model="info.org"
          :class="statusInput(v$.info.org)"
          type="text" class="step-form__input" id="step-form__input-organization"
          >
          <span class="error-text" v-if="v$.info.org.$error">
            Необходимо ввести название организации
          </span>
        </div>
      </div>
      <div class="step-form__item">
        <h2 class="step-form__item-title">Контактные данные</h2>
        <div class="step-form__block-wrapper">
          <label for="step-form__input-tel" class="step-form__item-label">Телефон</label>
          <input
            @blur="v$.info.tel.$touch"
            placeholder="+7"
            v-model="info.tel"
            v-mask="{mask: '+7 (NNN) NNN-NN-NN'}"
            :class="statusInput(v$.info.tel)"
            type="tel" class="step-form__input-tel" id="step-form__input-tel"
          >
          <span class="error-text" v-if="v$.info.tel.$error">
            Необходимо ввести номер телефона
          </span>
        </div>
        <div class="step-form__block-wrapper">
          <label for="step-form__input-email" class="step-form__item-label">E-mail</label>
          <input
            @blur="v$.info.email.$touch"
            v-model="info.email"
            type="email"
            class="step-form__input-email"
            :class="statusInput(v$.info.email)"
            id="step-form__input-email"
          >
          <span class="error-text" v-if="v$.info.email.$error">
            Необходимо ввести e-mail
          </span>
        </div>
        <div class="step-form__block-wrapper">
          <label for="step-form__input-city" class="step-form__item-label">Город организатора
          </label>
          <input
            @blur="v$.info.city.$touch"
            v-model="info.city"
            :class="statusInput(v$.info.city)"
            type="text" class="step-form__input-city" id="step-form__input-city">
          <span class="error-text" v-if="v$.info.city.$error">
            Необходимо ввести город организатора
          </span>
        </div>
      </div>
      <div class="step-form__item">
        <h2 class="step-form__item-title">Общая информация</h2>
        <div class="step-form__item-wrapper">
          <label for="step-form__input-org-name" class="step-form__item-label">Название</label>
          <input
            @blur="v$.info.name.$touch"
            v-model="info.name"
            :class="statusInput(v$.info.name)"
            type="text" class="step-form__input" id="step-form__input-org-name"
          >
          <span class="error-text" v-if="v$.info.name.$error">
            Необходимо ввести название мероприятия
          </span>
        </div>
      </div>
      <div class="step-form__item">
        <label for="step-form__photo-input" class="step-form__item-title">
          Фотография
        </label>
        <div class="step-form__item-wrapper">
          <div @click="handleDeletePhoto" :class="{ 'photo-container': info.file }">
            <label
              for="step-form__photo-input"
              class="step-form__photo-label"
            >
              <div class="step-form__img-wrapper">
                <img v-if="info.file"
                  class="step-form__img"
                  :src="info.file"
                />
                <img v-else
                  class="step-form__img-default"
                  src="../assets/img/add-photo.png"
                />
              </div>
            </label>
            <input
              @change="handleAddPhoto" type="file" name="photo"
              class="step-form__photo-input"
              id="step-form__photo-input"
              accept=".png,.jpg,.jpeg,image/png,image/jpg,image/jpeg"
            >
          </div>
        </div>
        <p class="step-form__photo-desc">Главная фотография (обложка мероприятия)</p>
      </div>
      <div class="step-form__item">
        <label for="step-form__full-desc" class="step-form__item-title">
          Подробное описание
        </label>
        <textarea
          @blur="v$.info.desc.$touch"
          v-model="info.desc"
          :class="statusInput(v$.info.desc)"
          class="step-form__item-textarea" id="step-form__full-desc"
        ></textarea>
        <span class="error-text" v-if="v$.info.desc.$error">
          Опишите мероприятие минимум десятью символами
        </span>
      </div>
      <div class="step-form__events events">
        <div v-for="(event, i) in info.eventDates" :key="i" class="events__event-duration">
          <div class="events__event-date">
            <h2 class="events__event-date-title">Дата начала</h2>
            <div class="events__event-date-input-container">
              <input class="events__event-date-input"
                v-model="event.startDate"
                type="date" required>
            </div>
          </div>
          <div class="events__event-date">
            <h2 class="events__event-date-title">Время начала</h2>
            <div class="events__event-time-input-container">
              <input class="events__event-time-input"
                v-model="event.startTime"
                type="time" required>
            </div>
          </div>
          <div class="events__event-dash"></div>
          <div class="events__event-date">
            <h2 class="events__event-date-title">Дата окончания</h2>
            <div class="events__event-date-input-container">
              <input class="events__event-date-input"
                v-model="event.endDate"
                type="date" required>
            </div>
          </div>
          <div class="events__event-date">
            <h2 class="events__event-date-title">Время окончания</h2>
            <div class="events__event-time-input-container">
              <input class="events__event-time-input"
              v-model="event.endTime"
              type="time" required>
            </div>
          </div>
          <div @click="deleteDate" class="events__event-delete-button"></div>
        </div>
        <div class="events__new-event">
          <div class="events__event-date">
            <h2 class="events__event-date-title">Дата начала</h2>
            <div class="events__event-date-input-container">
              <input
              v-model="editableEvenDate.startDate"
              class="events__event-date-input" type="date" required>
            </div>
          </div>
          <div class="events__event-date">
            <h2 class="events__event-date-title">Время начала</h2>
            <div class="events__event-time-input-container">
              <input
              v-model="editableEvenDate.startTime"
              class="events__event-time-input" type="time" required>
            </div>
          </div>
          <div class="events__new-event-dash"></div>
          <div class="events__event-date">
            <h2 class="events__event-date-title">Дата окончания</h2>
            <div class="events__event-date-input-container">
              <input
              v-model="editableEvenDate.endDate"
              class="events__event-date-input" type="date" required>
            </div>
          </div>
          <div class="events__event-date">
            <h2 class="events__event-date-title">Время окончания</h2>
            <div class="events__event-time-input-container">
              <input v-model="editableEvenDate.endTime"
              class="events__event-time-input" type="time" required>
            </div>
          </div>
        </div>
        <button
          @click="addDate"
          type="button"
          class="events__add-event-button">+ Добавить дату
        </button>
      </div>
      <div class="step-form__rating-address">
        <div class="step-form__rating-container">
          <label
            for="step-form__rating-select"
            class="step-form__item-label"
          >
            Рейтинг мероприятия
          </label>
          <div class="step-form__rating-select-wrapper">
            <select
              @change="selectRating"
              name="rating"
              id="step-form__rating-select"
              class="step-form__rating-select"
            >
              <option
                v-for="item in ratingList"
                :key="item.id"
                :value="item.title"
                :selected="item.title === info.rating"
                class="step-form__rating-option">{{ item.title }}</option>
            </select>
          </div>
        </div>
        <div class="step-form__address-container">
          <label
            for="step-form__address-input"
            class="step-form__item-label">Адрес мероприятия</label>
          <input
            @blur="v$.info.address.$touch"
            v-model="info.address"
            :class="statusInput(v$.info.address)"
            type="text" class="step-form__address-input" id="step-form__address-input">
          <span class="error-text" v-if="v$.info.address.$error">
            Необходимо ввести адрес мероприятия
          </span>
        </div>
      </div>
      <div @click="showError" class="nav-buttons">
        <button @click="clearForms" class="nav-buttons__reset" type="reset">Отмена</button>
        <router-link
          @click="goNextPage"
          :class="{'nav-buttons__futher-deactivated': v$.$silentErrors.length }"
          :to="{ name: 'SecondStep' }"
          class="nav-buttons__further">
          Далее
        </router-link>
        <span class="error-text button-error-text" v-if="isError">
          Необходимо заполнить все поля
        </span>
      </div>
    </div>
  </form>
</template>

<script>
import { VMaskDirective } from 'v-slim-mask';
import { email, required, minLength } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';
import getEventRating from '../helpers/requests';

export default {
  name: 'FirstStep',
  directives: {
    mask: VMaskDirective,
  },
  async mounted() {
    this.info = this.$store.state.info;
    this.ratingList = (await getEventRating()).result;
  },
  setup: () => ({
    v$: useVuelidate(),
  }),
  data: () => ({
    info: {
      org: '',
      tel: '',
      email: '',
      city: '',
      name: '',
      file: null,
      desc: '',
      eventDates: [],
      rating: '',
      address: '',
    },
    editableEvenDate: {
      startDate: '',
      startTime: '',
      endDate: '',
      endTime: '',
    },
    ratingList: [],
    isError: false,
    selected: '',
  }),
  validations: () => ({
    info: {
      org: { required, minLength: minLength(3) },
      tel: { required, minLength: minLength(11) },
      email: { required, email },
      city: { required, minLength: minLength(2) },
      name: { required, minLength: minLength(2) },
      file: { required, minLength: minLength(1) },
      desc: { required, minLength: minLength(10) },
      eventDates: { required, minLength: minLength(1) },
      address: { required, minLength: minLength(2) },
    },
  }),
  methods: {
    handleAddPhoto() {
      const photo = document.querySelector('.step-form__photo-input').files[0];
      this.info.file = window.URL.createObjectURL(photo);
    },
    handleDeletePhoto() {
      this.info.file = null;
    },
    addDate() {
      const currentDateValue = { ...this.editableEvenDate };
      this.info.eventDates.push(currentDateValue);
      this.editableEvenDate = {
        startDate: '',
        startTime: '',
        endDate: '',
        endTime: '',
      };
    },
    deleteDate(e) {
      const currentId = this.info.eventDates.indexOf(e.target);
      this.info.eventDates.splice(currentId, 1);
    },
    clearForms() {
      this.info = {
        org: '',
        tel: '',
        email: '',
        city: '',
        name: '',
        file: null,
        desc: '',
        eventDates: [],
        rating: '',
        address: '',
      };
      this.editableEvenDate = {
        startDate: '',
        startTime: '',
        endDate: '',
        endTime: '',
      };
      this.$store.commit('setState', this.info);
    },
    goNextPage() {
      this.$store.commit('setState', this.info);
    },
    selectRating(e) {
      this.info.rating = e.target.value;
    },
    statusInput(validation) {
      return {
        error: validation.$error,
      };
    },
    showError() {
      if (this.v$.$silentErrors.length) {
        this.isError = true;
      } else {
        this.isError = false;
      }
    },
  },
};
</script>
