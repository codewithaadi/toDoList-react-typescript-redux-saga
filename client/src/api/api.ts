import axios from "axios";
import { iTodo } from "../redux/models/iTodo";

export const getAllToDoApi = async ()=> await axios.get<iTodo>('http://localhost:7000/todos');

export const deleteToDoApi = async (id:Number)=>await axios.delete(`http://localhost:7000/todos/${id}`);

export const createToDoApi = async (todo:string)=> await axios.post('http://localhost:7000/todos',{data:todo});

export const toggleToDoApi = async (id:Number)=>await axios.get(`http://localhost:7000/todos/${id}`);

export const updateToDoApi = async (id:Number,content:any)=>await axios.put(`http://localhost:7000/todos/${id}`,{content});