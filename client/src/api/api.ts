import axios from "axios";
import { iTodo } from "../redux/models/iTodo";

export const getAllToDo = async ()=> await axios.get<iTodo>('http://localhost:8000/todos');

// export const toggleToDo = asycn ()=> await a
