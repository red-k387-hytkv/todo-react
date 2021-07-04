import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./compornents/inputTodo";

import { IncompleateTodo } from "./compornents/incompleateTodo";

import { CompleateTodo } from "./compornents/compleateTodo";

export const App = () => {
  const [todoText, setTodoText] = useState("");

  const [incompleateTodos, setIncompleateTodos] = useState([]);

  const [compleateTodos, setCompleateTodos] = useState([]);

  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleateTodos, todoText];
    setIncompleateTodos(newTodos);
    setTodoText("");
  };

  const onClickDeleate = (index) => {
    const newTodos = [...incompleateTodos];
    newTodos.splice(index, 1);
    setIncompleateTodos(newTodos);
  };

  const onClickCompleate = (index) => {
    const newInconpleateTodos = [...incompleateTodos];
    const newConpleateTodos = [...compleateTodos, incompleateTodos[index]];
    setCompleateTodos(newConpleateTodos);
    newInconpleateTodos.splice(index, 1);
    setIncompleateTodos(newInconpleateTodos);
  };

  const onClickReturn = (index) => {
    const newConpleateTodos = [...compleateTodos];
    const newInconpleateTodos = [...incompleateTodos, compleateTodos[index]];

    setIncompleateTodos(newInconpleateTodos);
    newConpleateTodos.splice(index, 1);
    setCompleateTodos(newConpleateTodos);
  };
  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClickAdd={onClickAdd}
      />
      <IncompleateTodo
        incompleateTodos={incompleateTodos}
        onClickCompleate={onClickCompleate}
        onClickDeleate={onClickDeleate}
      />
      <CompleateTodo
        compleateTodos={compleateTodos}
        onClickReturn={onClickReturn}
      />
    </>
  );
};
