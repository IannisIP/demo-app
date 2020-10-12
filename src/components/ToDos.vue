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
export default {
  name: 'ToDos',
  data: () => {
    return {
      todos: [],
    };
  },
  mounted() {
    //...mapGetters(['getToDos']);
    this.todos = this.$store.getters['getToDos'];
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
