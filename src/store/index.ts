import { Commit, createStore } from 'vuex';
import { STATUS, TodoItem, TodoList } from '../../typings/index';
import { REMOVETODO, SETSTATUS, SETTODO, SETTODOLIST } from './actionType';
interface Ctx {
  commit: Commit;
  state: TodoList;
}

export default createStore({
  state: <TodoList> {
    list: []
  },
  actions: {
    [SETTODO]({ commit }: Ctx, payload: TodoItem) {
      commit(SETTODO, payload);
    },
    [SETTODOLIST]({ commit }: Ctx, payload: TodoItem[]) {
      commit(SETTODOLIST, payload);
    },
    [REMOVETODO]({ commit }: Ctx, id: number) {
      commit(REMOVETODO, id);
    },
    [SETSTATUS]({ commit }: Ctx, id: number) {
      commit(SETSTATUS, id);
    }
  },
  mutations: {
    [SETTODO](state: TodoList, todo: TodoItem) {
      state.list = [todo, ...state.list];
    },
    [SETTODOLIST](state: TodoList, todoList: TodoItem[]) {
      state.list = todoList;
    },
    [REMOVETODO](state: TodoList, id: number ) {
      state.list = state.list.filter(item => item.id !== id);
    },
    [SETSTATUS](state: TodoList, id: number ) {
      state.list = state.list.map(item => {
        if (item.id === id) {
          item.status = item.isDone ? STATUS.DONE : STATUS.WOLLDO;
          switch (item.status) {
            case STATUS.WOLLDO:
            item.status = STATUS.DOING;
              break;

            default:
              break;
          }
        }
        return item;
      })
    }
  }
})
