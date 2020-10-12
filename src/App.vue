<template>
  <div id="app">
    <div id="main">
      <img alt="Vue logo" src="./assets/logo.png" />
      <br />
      <label for="todo">What do you plan to do?</label>
      <br />
      <v-text-field v-model="inputValue" id="todo"></v-text-field>

      <v-btn @click="saveInStore">Save Todo</v-btn>
      <v-btn @click="removeFromStore">Remove Todo</v-btn>

      <ToDos />
    </div>
    <MainFooter />
  </div>
</template>

<script>
import ToDos from './components/ToDos.vue';
import MainFooter from './components/MainFooter.vue';
import { ref } from '@vue/composition-api';

export default {
  name: 'App',
  components: {
    ToDos,
    MainFooter,
  },
  setup(props, context) {
    const inputValue = ref('');

    function saveInStore() {
      if (inputValue.value === '') return;

      context.root.$store.dispatch('saveCurrentTodo', inputValue.value);
      inputValue.value = '';
    }

    function removeFromStore() {
      if (context.root.$store.getters.getToDos.length > 0)
        context.root.$store.dispatch('removeCurrentTodo');
    }

    return {
      saveInStore,
      removeFromStore,
      inputValue,
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.v-btn {
  margin: 5px;
}

.v-input {
  margin: 0 auto;
  width: 200px;
}
</style>
