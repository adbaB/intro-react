import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
  const onClickButton = (msg)=>{
    alert(msg)
  }
  return (
    <button 
    onClick={()=>{onClickButton('Aqui se volvio a apuñalar el boton')}}
    className="CreateTodoButton">
      +
      </button>
  );
}

export { CreateTodoButton };
