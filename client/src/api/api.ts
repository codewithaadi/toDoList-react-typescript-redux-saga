import axios from "axios";
import { iTodo } from "../redux/models/iTodo";

export const getAllToDo = async ()=> await axios.get<iTodo>('http://localhost:7000/todos');

export const deleteToDo = async (id:Number)=>await axios.delete(`http://localhost:7000/todos/${id}`);

export const createToDo = async (todo:string)=> await axios.post('http://localhost:7000/todos',{data:todo});

export const toggleToDo = async (id:Number)=>await axios.get(`http://localhost:7000/todos/${id}`);