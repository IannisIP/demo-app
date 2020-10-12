<template>
  <div class="todos">
    <v-list>
      <v-list-item v-for="todo in todos" :key="todo.id"
        >{{ todo.value }}
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
//import { mapGetters } from 'vuex';
import { ref, onMounted } from '@vue/composition-api';

export default {
  name: 'ToDos',
  setup(props, context) {
    const todos = ref([]);

    onMounted(() => {
      todos.value = context.root.$store.getters['getToDos'];
    });

    return {
      todos,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.v-list {
  margin: 0 auto;
  width: 200px;
  height: 200px;
  overflow-y: auto;
}
</style>
