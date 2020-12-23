<template>
  <div v-if="todoList.length">
    <todo-item
      v-for="(item, index) in todoList"
      :key="index"
      :item="item"
      @remove-todo="removeTodo"
      @set-status="setStatus"
    />
  </div>
</template>

<script lang="ts">
import todoItem from './item.vue';
import { defineComponent } from 'vue';
import { useTodo, UseTodo } from '../../hooks/useTodo'
export default defineComponent({
  name: 'todoList',
  props: {
    todoList: Array
  },
  components: {
    todoItem
  },
  setup() {
    const { removeTodo, setStatus }: UseTodo = useTodo();
    return {
      removeTodo,
      setStatus
    }
  }
});
</script>

<style>

</style>
