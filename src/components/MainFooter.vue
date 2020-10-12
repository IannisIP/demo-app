<template>
  <div id="footer">
    <div id="inputContainer">
      <div>Weather Info for</div>
      <v-text-field v-model="cityInputValue" @change="getUpdate"></v-text-field>
    </div>
    <div id="infoContainer">
      <div>{{ currentCity.name }}</div>
      <div>{{ currentCity.description }}</div>
      <div>{{ currentCity.temp }}</div>
    </div>
    <div id="refershContainer">
      <v-btn @click="getUpdate">Refresh</v-btn>
    </div>
  </div>
</template>

<script>
//import { mapGetters, mapActions } from 'vuex';
import { ref, computed } from '@vue/composition-api';
export default {
  name: 'MainFooter',
  setup(props, context) {
    const cityInputValue = ref('');

    const currentCity = computed(
      () => context.root.$store.getters['getCurrentCity']
    );

    function getUpdate() {
      return context.root.$store.dispatch(
        'getWeatherInfo',
        cityInputValue.value
      );
    }
    return {
      getUpdate,
      cityInputValue,
      currentCity,
    };
  },
};
</script>

<style scoped>
#footer {
  display: flex;
  position: fixed;
  bottom: 0;
  padding: 15px;
  width: 100%;
  box-sizing: border-box;
}
#inputConatiner {
  flex: 1;
}
#infoContainer {
  flex: 2;
}
#refreshContainer {
  flex: 1;
}

.v-input {
  width: 100px;
}
</style>
