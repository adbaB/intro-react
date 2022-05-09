import React, { useContext } from "react";
import { TodoCounter } from "../todoCounter";
import { TodoContext } from "../../context";
import { TodoSearch } from "../todoSearch";
import { TodoList } from "../todoList";
import { TodoItem } from "../todoItem";
import { CreateTodoButton } from "../createTodoButtom";
import { Modal } from "../modal";
export const AppUI = () => {
  const { 
     error,
     loading, 
     searchedTodos, 
     completeTodo, 
     deleteTodo 
    } = useContext(TodoContext);
  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <p>Desespérate, hubo un error...</p>}
        {loading && <p>Estamos Cargando, no desesperes...</p>}
        {!loading && !searchedTodos.length && <p>¡Crea tu primer ToDo!</p>}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => {
              completeTodo(todo.text);
            }}
            onDelete={() => {
              deleteTodo(todo.text);
            }}
          />
        ))}
      </TodoList>
            <Modal>
                <p>NOS JUIMOS</p>
            </Modal>
      <CreateTodoButton />
    </>
  );
};
