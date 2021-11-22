import Todo from "./Todo";

const TodoList = (props) => {
  return (
    <ul className="todoList">
      {props.todos.length > 0 ? (
        props.todos.map((todo) => {
          return <Todo key={todo.id} todo={todo} {...props} />;
        })
      ) : (
        <div
          style={{
            textAlign: "center",
            cursor: "default"
          }}
        >
          <p
            style={{
              fontStyle: "oblique"
            }}
          >
            no tasks...
          </p>
          <span role="img" aria-label="emoji" style={{ fontSize: "2rem" }}>
            🎈
          </span>
        </div>
      )}
    </ul>
  );
};

export default TodoList;
