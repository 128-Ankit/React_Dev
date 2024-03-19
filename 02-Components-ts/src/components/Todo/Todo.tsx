import React from "react"
import AddTodo from "./Todo-Items/Todo-items";

const TodoComponents: React.FC = () => {
    return (
        <div>
            <AddTodo />
            <AddTodo />
            <AddTodo />
        </div>
    )
}

export default TodoComponents