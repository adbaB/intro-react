import React from 'react';
import './TodoItem.css';

function TodoItem(props) {

  const {onComplete,onDelete} = props
  // const onComplete = ()=>{
  //   alert('ya completaste la tarea ' + props.text)
  // } 
  // const onDelete = ()=>{
  //   alert('Borraste la tarea ' + props.text)
  // }
  return (
    <li className="TodoItem">
      <span 
      className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
      onClick= {onComplete}
      >
        √
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span 
      className="Icon Icon-delete"
      onClick={onDelete}
      >
        X
      </span>
    </li>
  );
}

export { TodoItem };
