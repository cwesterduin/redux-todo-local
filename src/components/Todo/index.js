import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../../actions";
import { NavLink } from "react-router-dom";
import { DeleteButton, AddTodo } from ".."

const Todo = ({ title, body, completed, todoId }) => {
  const [editing, setEditing] = useState(false);
  const dispatch = useDispatch();

  function handleCheck() {
    dispatch(toggleTodo(todoId));
  }

  function runDelete(todoId){
    dispatch(deleteTodo(todoId))
}

  return !editing ? (
    <tr>
      <td>
        <DeleteButton handleClick={runDelete} todoId={todoId} />
        <button onClick={() => setEditing((e) => !e)}>✎</button>
        {title}
        <NavLink style={{ float: "right" }} to={`/todo/${todoId}`}>
          more...
        </NavLink>
      </td>
      <td>{body}</td>
      <td>
        <input type="checkbox" checked={completed} onChange={handleCheck} />
      </td>
    </tr>
  ) : (
    <AddTodo edit={{title, body, setEditing}} newId={todoId} />
  );
};

export default Todo;
