interface TodoItem {
  id: number;
  content: string;
  status: STATUS;
  isDone: Boolean;
}
enum STATUS {
  DOING = 'doing',
  WOLLDO = 'willdo',
  DONE = 'done'
}
interface TodoList {
  list: TodoItem[];
}

export {
  TodoItem,
  TodoList,
  STATUS
}