import { useState } from "react";
import {useDispatch} from 'react-redux';
import { addToDoStart,loadToDoStart } from "../redux/actions/todoAction";

const ToDoForm = ()=>{
    const[text,setText] = useState("");
    const dispatch = useDispatch();

    const onFormSubmit = (e:any)=>{
        e.preventDefault();
        dispatch(addToDoStart(text));
        dispatch(loadToDoStart());
        setText("");
    }

    const onInputChange = (e:any)=>{
        setText(e.target.value);
    }

    return(
        <form className="form" onSubmit={onFormSubmit} >
            <input placeholder="Enter New todo.." className="input" onChange={onInputChange} value={text}></input>
        </form>
    )
}
export default ToDoForm;