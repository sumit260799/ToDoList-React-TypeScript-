import { createContext, useContext, useState, ReactNode } from "react";

export type Todo = {
  id: number;
  todo: string;
  completed: boolean;
  createdAt: Date;
};

export type TodosProviderProps = {
  children: ReactNode;
};

export type TodosContextType = {
  todos: Todo[];
  addTodo: (value: string) => void;
  toggleToDo: (id: number) => void;
  deleteToDo: (id: number) => void;
};

const todosContext = createContext<TodosContextType | undefined>(undefined);

export const TodosProvider = ({ children }: TodosProviderProps) => {
  // const getAllTodos = JSON.parse(localStorage.getItem("todos") || "[]");
  const [todos, setTodos] = useState<Todo[]>([]); // Initialize with an empty array if there are no todos in localStorage

  const addTodo = (value: string) => {
    const todoData = {
      id: Date.now(),
      todo: value,
      completed: false,
      createdAt: new Date(),
    };

    const updatedTodos = [...todos, todoData];
    setTodos(updatedTodos);
  };

  const toggleToDo = (id: number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteToDo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <todosContext.Provider value={{ todos, addTodo, toggleToDo, deleteToDo }}>
      {children}
    </todosContext.Provider>
  );
};

const getTodos = () => {
  const context = useContext(todosContext);
  if (context === undefined) {
    throw new Error("useTodos must be used within a TodosProvider");
  }
  return context;
};

export default getTodos;
