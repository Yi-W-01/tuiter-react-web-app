import TodoItem from "./TodoItem";
import todos from "./todos.json";

const TodoList = () => {
    return(
        <ul>
            {
                todos.map(todo => {
                    return (<TodoItem key={todo._id} todo={todo}/>);
                })
            }
        </ul>
    );
}
export default TodoList;

