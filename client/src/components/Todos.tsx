import { useEffect } from "react";
// import { deleteTodo, getAllTodos } from '../redux/actions';
import { loadToDoStart } from "../redux/actions/todoAction";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/reducers/rootReducer";
import { deleteToDoStart } from "../redux/actions/todoAction";
// import { ALL_TODOS,DONE_TODOS, ACTIVE_TODOS} from '../redux/actions/type';

//components
import Todo from "./Todo";
import Tabs from "./Tabs";

export default function Todos() {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.data.todos);
  // const currentTab = useSelector(state=> state.currentTab);

  useEffect(() => {
    dispatch(loadToDoStart());
  }, []);

  // const getTodos = ()=>{
  //   if(currentTab=== ALL_TODOS){
  //     return todos;
  //   }
  //   else if(currentTab === ACTIVE_TODOS){
  //       return todos.filter(todo=> !todo.done)
  //   }
  //   else if(currentTab === DONE_TODOS){
  //     return todos.filter(todo=> todo.done)
  //   }
  // }

  const removeDoneTodos = () => {
    todos.forEach(({ done, _id }) => {
      if (done) {
        dispatch(deleteToDoStart(_id));
      }
    });
  };
  return (
    <article>
      <div>
        <Tabs
        // currentTab={currentTab}
        />
        {todos.some((todo) => todo.done) ? (
          <button className="button clear" onClick={removeDoneTodos}>
            Remove Done ToDo's
          </button>
        ) : null}
      </div>
      <ul>
        {/* {
          getTodos().map(todo=>(
            <Todo key={todo._id} todo={todo}/>
          ))
        } */}
        {todos?.map((todo: any) => (
          <Todo key={todo._id} todo={todo}></Todo>
        ))}
      </ul>
    </article>
  );
}
