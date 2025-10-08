import { useDispatch } from "react-redux";  //custom hook to dispatch actions to the redux store
import { markTodoAsCompleted, deleteTodo, createTodo } from "./todosSlice";

export default function TodoListItem({ todo, onCompletedClicked, onDeleteClicked }) {

  const dispatch = useDispatch(); // gives us the dispatch function to send actions to the redux store

  return (
    <div>
      <h3>{todo.text}</h3>
      {todo.isCompleted && <p>Complete!</p>}
      {todo.isCompleted
        ? <button onClick={() => dispatch(deleteTodo())}>Delete Item</button>
        : <button onClick={() => dispatch(markTodoAsCompleted())}>Mark as Completed</button>}
    </div>
  );
}