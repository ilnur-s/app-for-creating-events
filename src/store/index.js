import { createStore } from 'vuex';

export default createStore({
  state: {
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
  },
  mutations: {
    setState(state, data) {
      state.info = data;
    },
  },
  actions: {
  },
  modules: {
  },
});
