import TodoItem from "./TodoItem";
import { useContext } from "react";
import { TodoItemContext } from "../store/todo-item-store";

const TodoItems = () => {
    const {todoitems} = useContext(TodoItemContext);
    
    const incompleteTodos = todoitems.filter(item => !item.completed);
    const completedTodos = todoitems.filter(item => item.completed);

    return <div className="w-full max-w-4xl mx-auto px-4">
        {/* Active todos */}
        {incompleteTodos.length > 0 && (
        <div className="mb-8">
            <h2 className="text-lg font-medium text-gray-500 mb-4 pl-2">Tasks to do</h2>
            {incompleteTodos.map((item) => (
                <TodoItem 
                    key={item.id} 
                    TodoName={item.name} 
                    TodoDate={item.duedate} 
                    TodoId={item.id}
                    completed={item.completed}
                />
            ))}
        </div>)}

        {/* Completed todos */}
        {completedTodos.length > 0 && (
            <div className="border-t border-gray-200 pt-8">
                <h2 className="text-lg font-medium text-gray-500 mb-4 pl-2">Completed</h2>
                {completedTodos.map((item) => (
                    <TodoItem 
                        key={item.id} 
                        TodoName={item.name} 
                        TodoDate={item.duedate} 
                        TodoId={item.id}
                        completed={item.completed}
                    />
                ))}
            </div>
        )}
    </div>
}

export default TodoItems;