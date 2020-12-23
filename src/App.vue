<template>
  <main class="box">
    <todo-input />
    <todo-item
      :todoList="todoList"
    />
  </main>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from 'vue';
import { useStore, Store } from 'vuex';
import TodoInput from './components/todoInput/index.vue';
import TodoItem from './components/TodoItem/index.vue';
import { useTodo, UseTodo } from './hooks/useTodo';

export default defineComponent({
  name: 'App',
  components: {
    TodoInput,
    TodoItem
  },
  setup() {
    const { setTodo }: UseTodo = useTodo();
    const store: Store<any> = useStore();
    const items = [
      {
        id: 1,
        name: '1',
        show: false
      },
      {
        id: 2,
        name: '2',
        show: true
      },
      {
        id: 3,
        name: '3',
        show: true
      }
    ];
    onMounted(() => {
      setTodo();
    });
    return {
      items,
      todoList: computed(() => store.state.list)
    }
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.box {
  width: 500px;
  margin: 0 auto;
}
</style>
