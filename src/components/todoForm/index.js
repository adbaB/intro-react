import React, { useContext, useState } from "react";
import { TodoContext } from "../../context";
import './todoForm.css'

export const TodoForm = () => {

  const [newTodoValue,setNewTodoValue] = useState('')  
  const {addTodo,setOpenModal} = useContext(TodoContext)  
  const onCancel = (e) => {
    setOpenModal(false)
  };
  const onSubmit = (e) => {
   e.preventDefault();
    addTodo(newTodoValue)
    setOpenModal(false)
  };
  const onChange = (e)=>{
      setNewTodoValue(e.target.value)
      
  }
  return (
    <form onSubmit={onSubmit}>
      <label>Agrega un ToDo</label>
      <textarea 
      value={newTodoValue}
      onChange = {onChange}
      placeholder="Cortar la cebolla" />
      <div className="TodoForm-buttonContainer">
        <button className = 'TodoForm-button TodoForm-button-cancel' type="button" onClick={onCancel}>
          Cancelar
        </button>
        <button className = 'TodoForm-button TodoForm-button-add' type="submit">Añadir</button>
      </div>
    </form>
  );
};
