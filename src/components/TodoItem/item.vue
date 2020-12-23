<template>
  <div class="todo-item">
    <el-checkbox v-model="item.isDone" @change="setStatus(item.id)" :title="item.content">{{item.content}}</el-checkbox>
    <el-button type="danger" @click="removeTodo(item.id)">删除</el-button>
    <el-button type="success" v-if="!item.isDone && item.status !== DOING" @click="setStatus(item.id)">马上做</el-button>
    <el-tag type="warning" v-if="item.status === DOING">正在做...</el-tag>
    <el-divider></el-divider>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { STATUS } from '../../../typings/index';
interface Status {
  WILLDO: STATUS.WOLLDO;
  DOING: STATUS.DOING;
  DONE: STATUS.DONE;
}
export default defineComponent({
  name: 'todoItem',
  props: {
    item: Object
  },
  setup(props, { emit }) {
    const status: Status = {
      WILLDO: STATUS.WOLLDO,
      DOING: STATUS.DOING,
      DONE: STATUS.DONE
    };
    const removeTodo = (id: number): void => {
      emit('remove-todo', id);
    }
    const setStatus = (id: number): void => {
      emit('set-status', id);
    }
    return {
      ...status,
      removeTodo,
      setStatus
    }
  }
});
</script>

<style >
.todo-item {

}
.el-checkbox {
  width: 336px;
  text-align: left;
}
.el-checkbox .el-checkbox__label {
  margin-right: 20px;
  overflow: hidden;
  white-space: nowrap;
  display: inline-block;
  text-overflow: ellipsis;
  width: 308px;
  vertical-align: bottom;
}
.el-tag {
  margin-left: 10px;
}
</style>
