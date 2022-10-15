import { useDispatch, useSelector } from "react-redux";
import { fetchAllTodos, toggleState } from "../store/todos/todos";

export default function TodoList() {
    const todos = useSelector(state => state.todos);
    const loading = useSelector(state => state.loading);
    const dispatch = useDispatch();

    return (
        <>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id} onClick={() => dispatch(toggleState(todo.id))}>
                        {todo.title} | {todo.completed ? "Done" : "Pending"}
                    </li>
                ))}
            </ul>
            <h1>{ loading && "Loading..." }</h1>
            <button onClick={() => dispatch(fetchAllTodos())}>Load todos</button>
        </>
    )
}