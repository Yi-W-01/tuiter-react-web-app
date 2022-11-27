import React from "react";
import {Link} from "react-router-dom";
// import Classes from "./Classes";
// import Styles from "./Styles";
// import ConditionalOutput from "./ConditionalOutput";
// import TodoItem from "./ToDo/TodoItem";
// import TodoList from "./ToDo/TodoList";
import ReduxExamples from "./redux-examples";
const Labs = () => {
    return(
        <>
            <h1>Labs!</h1>
            <Link to="/hello">Hello</Link> |
            <Link to="/tuiter">Tuiter</Link> |


            <ReduxExamples/>
            {/*<TodoList />*/}
            {/*<TodoItem />*/}
            {/*<ConditionalOutput/>*/}
            {/*<Styles/>*/}
            {/*<Classes/>*/}
        </>
)
};

export default Labs;