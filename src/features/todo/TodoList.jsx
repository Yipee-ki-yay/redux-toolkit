import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "./todoSlice";

const AddTodo = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  return (
    <div>
      {todos.map((todo) => {
        return (
          <li className="todoItem" key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>
              Delete
            </button>
          </li>
        );
      })}
    </div>
  );
};

export default AddTodo;
