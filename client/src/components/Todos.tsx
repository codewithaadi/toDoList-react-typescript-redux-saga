import { useEffect } from "react";
import { loadToDoStart } from "../redux/actions/todoAction";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/reducers/rootReducer";
import { deleteToDoStart } from "../redux/actions/todoAction";
import {
  ALL_TODOS,
  ACTIVE_TODOS,
  DONE_TODOS,
} from "../redux/Actiontypes/actiontypes";

//components
import Todo from "./Todo";

export default function Todos() {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.data.todos);

  useEffect(() => {
    dispatch(loadToDoStart());
  }, []);

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
        {todos.some((todo: any) => todo.done) ? (
          <button className="button clear" onClick={removeDoneTodos}>
            Remove Done ToDo's
          </button>
        ) : null}
      </div>
      <ul>
        {todos?.map((todo: any) => (
          <Todo key={todo._id} todo={todo}></Todo>
        ))}
      </ul>
    </article>
  );
}
