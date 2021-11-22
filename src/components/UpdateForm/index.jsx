import { useRef, useState } from "react";
import styles from "./styles.module.css";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

const UpdateForm = (props) => {
  const [value, setValue] = useState(props.todo.text);
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { todo } = props;

    if (!value.trim()) {
      setValue("");
      inputRef.current.focus();
      return;
    }
    props.confirmUpdateTodoFn(todo, value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        ref={inputRef}
        required
        autoFocus
        placeholder="Type task here..."
        className={styles.input}
      />

      <div className={styles.icons}>
        <AiOutlineCheckCircle onClick={handleSubmit} title={"Confirm Update"} />
        <AiOutlineCloseCircle
          onClick={() => props.cancelUpdateTodoFn(props.todo)}
          title={"Cancel Update"}
        />
      </div>
    </form>
  );
};

export default UpdateForm;
