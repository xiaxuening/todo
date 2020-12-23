<template>
  <div class="todo-input">
    <h1>TODO</h1>
    <h6>北京时间：{{timesrt}}</h6>
    <el-input
      placeholder="请输入内容"
      v-model="inputVal"
      clearable
      @change="setTodoValueHandle"
    >
    </el-input>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onUpdated, onMounted } from 'vue';
import { useTodo, UseTodo } from '../../hooks/useTodo';
export default defineComponent({
  name: 'todoInput',
  setup() {
    const inputVal = ref('');
    const timesrt = ref('');
    const { setTodoValue }: UseTodo = useTodo();
    const setTodoValueHandle = (): void => {
      if (inputVal.value && inputVal.value.length && inputVal.value.trim()) {
        setTodoValue(inputVal.value)
        inputVal.value = '';
      }
    };
    const getData = (): void => {
      const now = new Date();
      const year = now.getFullYear();       //年
      const month = now.getMonth() + 1;     //月
      const day = now.getDate();            //日
      const hh = now.getHours();            //时
      const mm = now.getMinutes();          //分
      const ss = now.getSeconds()
      let clock = year + '-';
      if(month < 10) {
        clock += '0';
      }
      clock += month + '-';
      if(day < 10) {
        clock += '0';
      }
      clock += day + ' ';
      if(hh < 10) {
        clock += '0';
      }
      clock += hh + ':';
      if (mm < 10) clock += '0';
      clock += mm + ':';
      if (ss < 10) {
        clock += '0';
      }
      clock += ss;
      timesrt.value = clock;
    };
     setInterval(() => {
      getData();
    }, 1000);
    return {
      inputVal,
      setTodoValueHandle,
      timesrt
    }
  }
});
</script>
<style>
.todo-input {
margin-bottom: 20px;
}
h6 {

}
</style>
