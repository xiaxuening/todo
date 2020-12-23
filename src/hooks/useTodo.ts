import { REMOVETODO, SETSTATUS, SETTODO, SETTODOLIST } from "@/store/actionType";
import { STATUS, TodoItem } from "../../typings/index";
import { Store, useStore } from "vuex";
import { watch } from "vue";

export interface UseTodo {
  setTodoValue: (content: string) => void;
  setTodo: () => void;
  removeTodo: (id: number) => void;
  setStatus: (id: number) => void;
}
interface UseLocalStorage {
  setLocalStorage: (todoList: TodoItem[]) => void;
  getetLocalStorage: () => TodoItem[];
}
function useLocalStorage(): UseLocalStorage {
  function getetLocalStorage(): TodoItem[] {
    return JSON.parse(localStorage.getItem('todo') || '[]');
  }
  function setLocalStorage(todoList: TodoItem[]): void {
    localStorage.setItem('todo', JSON.stringify(todoList));
  }
  return {
    setLocalStorage,
    getetLocalStorage
  }
}
function useTodo(): UseTodo {
  const store: Store<any> = useStore();
  const {setLocalStorage, getetLocalStorage } = useLocalStorage();
  watch(() => store.state.list, (todoList: TodoItem[]) => setLocalStorage(todoList));
  function setTodoValue(content: string): void {
    const todo: TodoItem = {
      id: new Date().getTime(),
      content,
      status: STATUS.WOLLDO,
      isDone: false
    };
    store.dispatch(SETTODO, todo);
  }
  function setTodo(): void {
    const todoList: TodoItem[] = getetLocalStorage();
    store.dispatch(SETTODOLIST, todoList);
  }
  function removeTodo(id: number): void {
    store.dispatch(REMOVETODO, id);
  }
  function setStatus(id: number): void {
    store.dispatch(SETSTATUS, id);
  }
  return {
    setTodoValue,
    setTodo,
    removeTodo,
    setStatus
  }
}
export {
  useTodo
}