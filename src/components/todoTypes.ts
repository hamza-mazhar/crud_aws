export interface IPropsTodoList {
  todoList: todoItem[];
  removeItem: (email: string) => void;
}

export interface todoItem {
  name: string;
  email: string;
}
