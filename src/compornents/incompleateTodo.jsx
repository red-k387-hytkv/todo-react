import React from "react";

export const IncompleateTodo = (props) => {
  const { incompleateTodos, onClickCompleate, onClickDeleate } = props;

  return (
    <>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleateTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickCompleate(index)}>完了</button>
                <button onClick={() => onClickDeleate(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
