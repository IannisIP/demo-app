import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const getWeather = city =>
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=924ca58590a75f8b5189af03ff90dc53&units=metric`
  ).then(res => res.json());

export default new Vuex.Store({
  state: {
    currentCity: {},
    todos: [{ id: 1, value: 'TEST TO DO' }],
  },
  mutations: {
    //syncron
    saveCurrentTodo(state, payload) {
      state.todos.push(payload);
    },
    removeCurrentTodo(state) {
      state.todos.pop();
    },
    setCurrentCity: (state, currentCity) => (state.currentCity = currentCity),
  },
  actions: {
    saveCurrentTodo({ commit }, todo) {
      const todoObj = { id: Math.random(), value: todo };
      commit('saveCurrentTodo', todoObj);
    },
    removeCurrentTodo(state) {
      state.commit('removeCurrentTodo');
    },
    //async
    async getWeatherInfo(state, city) {
      const data = await getWeather(city);
      const currentCity = {
        name: data.name,
        description: data.weather[0].description,
        temp: data.main.temp,
      };
      state.commit('setCurrentCity', currentCity);
    },
  },
  getters: {
    getToDos: state => state.todos,
    getCurrentCity: function(state) {
      return state.currentCity;
    },
  },
  modules: {},
});
