import { useRef, useState } from "react";

const TodoForm = (props) => {
  const [value, setValue] = useState("");
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value.trim()) {
      setValue("");
      inputRef.current.focus();
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: value.trim(),
      isCompleted: false
    };

    props.createTodoFn(newTodo);

    setValue("");
    inputRef.current.focus();
    console.log("CREATE:", newTodo);
  };

  return (
    <form onSubmit={handleSubmit} id="formTodoInput">
      <div className="inputTodo">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          ref={inputRef}
          required
          autoFocus
          placeholder="Type here..."
        />
        <button type="submit" children="add" />
      </div>
    </form>
  );
};

export default TodoForm;
