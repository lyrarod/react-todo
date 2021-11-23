import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import "./styles.css";

const getTodos = () => {
  const data = localStorage.getItem("todos");
  return data ? JSON.parse(data) : [{ id: 1, text: "🚀 Hello world!" }];
};

const TodoApp = () => {
  const [todos, setTodos] = useState(getTodos());

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const confirmUpdateTodo = (todo, text) => {
    const newTodos = [...todos];
    const res = newTodos.map((ntodo) => {
      if (ntodo.id === todo.id) {
        return {
          id: ntodo.id,
          text: text.trim(),
          isCompleted: ntodo.isCompleted,
          isUpdating: false,
          isDelete: true
        };
      }
      return {
        ...ntodo,
        isUpdating: false,
        isDelete: true
      };
    });

    setTodos(res);
    // console.log(res);
  };

  const cancelUpdateTodo = (todo) => {
    const newTodos = [...todos];
    const res = newTodos.map((ntodo) => {
      if (ntodo.id === todo.id) {
        return {
          ...ntodo,
          isUpdating: false,
          isDelete: true
        };
      }
      return {
        ...ntodo,
        isDelete: true
      };
    });

    setTodos(res);
    // console.log(res);
  };

  const setUpdateTodo = (todo) => {
    const newTodos = [...todos];
    const res = newTodos.map((ntodo) => {
      if (ntodo.id === todo.id) {
        return {
          ...ntodo,
          isUpdating: true,
          isDelete: false
        };
      }
      return {
        ...ntodo,
        isUpdating: false,
        isDelete: false
      };
    });

    setTodos(res);
    // console.log(res);
  };

  const deleteTodo = (todo) => {
    const newTodos = [...todos];
    const filterTodos = newTodos.filter((newTodo) => newTodo.id !== todo.id);
    setTodos(filterTodos);
    // console.log("DELETE:", todo);
  };

  const createTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  const completedTodo = (todo) => {
    const newTodos = [...todos];
    const findTodo = newTodos.find((newTodo) => newTodo.id === todo.id);
    findTodo.isCompleted = !findTodo.isCompleted;
    setTodos(newTodos);
    // console.log("COMPLETED:", findTodo);
  };

  return (
    <div className="todoApp">
      <TodoForm createTodoFn={createTodo} />
      <TodoList
        todos={todos}
        deleteTodoFn={deleteTodo}
        completedTodoFn={completedTodo}
        setUpdateTodoFn={setUpdateTodo}
        cancelUpdateTodoFn={cancelUpdateTodo}
        confirmUpdateTodoFn={confirmUpdateTodo}
      />
    </div>
  );
};

export default TodoApp;
