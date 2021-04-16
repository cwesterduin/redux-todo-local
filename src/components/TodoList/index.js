import React from 'react'
import { Todo, AddTodo } from '..'
import { useSelector } from 'react-redux'
import './style.css'

const TodoList = () => {
  const todos = useSelector((state) => state);
  console.log(todos);
  const todoList = todos.map((todo, i) => (
    <Todo key={i} title={todo.title} body={todo.body} completed={false} />
  ));
  return (
    <>
    <table>
        <thead>
            <tr>
        <th>Title</th>
        <th>Body</th>
        <th>Completed</th>
        </tr>
        </thead>
      <tbody>
      {todoList}
      <AddTodo />
      </tbody>
    </table>
    
    <form id="form1"></form>
    </>
  );
};

export default TodoList