import { useState } from "react";
// import { toggleTodo,updateTodo,deleteTodo } from '../redux/actions';
// import { useDispatch } from 'react-redux';


export default function Todo(props:any) {
  const [editing, setEditing] = useState(false);
  const [text,setText] = useState(props.todo.content);

//   const dispatch = useDispatch();
  const onFormSubmit = (e:any)=>{
    e.preventDefault();
    setEditing(prevState => !prevState);
    // dispatch(updateTodo(props.todo._id, text));
  }

  return (
    <li className='task' 
    // onClick={() => dispatch(toggleTodo(props.todo._id))} 
    style={{
      textDecoration: props.todo.done ? 'line-through' : '',
      color: props.todo.done ? '#bdc3c7' : '#34495e'
    }}>
      <span style={{ display: editing ? 'none' : '' }}>{props.todo.content}</span>

      <form  style={{ display: editing ? 'inline' : 'none' }} onSubmit={onFormSubmit}>
        <input
          type="text"
          value={text}
          className="edit-todo"
          onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setText(e.target.value)}
        />
      </form>

      <span className='icon'>
        <i className='fas fa-trash' 
        // onClick={()=>dispatch(deleteTodo(props.todo._id))}
        />
      </span>
      <span className='icon'>
        <i className='fas fa-pen' onClick={() => setEditing(prevState => !prevState)} />
      </span>
    </li>
  )
}
