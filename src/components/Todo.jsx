import UpdateForm from "../components/UpdateForm";

import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

const Todo = (props) => {
  const { isCompleted, isUpdating, isDelete } = props.todo;

  return (
    <>
      <div
        className="rowList"
        style={{
          border: isUpdating && "1px solid #0fbcf9"
        }}
      >
        {!isUpdating ? (
          <>
            <li
              onClick={() => props.completedTodoFn(props.todo)}
              style={{
                textDecoration: isCompleted && "line-through double red"
              }}
            >
              {props.todo.text}
            </li>
            <div className="buttons">
              <AiOutlineEdit
                onClick={() => props.setUpdateTodoFn(props.todo)}
                title={"Update Task"}
              />

              <AiOutlineDelete
                onClick={() => {
                  // console.log("isDelete:", props.todo);
                  if (isDelete || isDelete === undefined) {
                    return props.deleteTodoFn(props.todo);
                  }
                }}
                title={"⚠ DELETE TASK"}
              />
            </div>
          </>
        ) : (
          <UpdateForm {...props} />
        )}
      </div>
    </>
  );
};
export default Todo;
