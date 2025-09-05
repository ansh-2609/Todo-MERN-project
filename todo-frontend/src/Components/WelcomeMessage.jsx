import { useContext } from "react";
import { TodoItemContext } from "../store/todo-item-store";

const WelcomeMessage = () =>{
    const {todoitems} = useContext(TodoItemContext);
    const incompleteTodos = todoitems.filter(item => !item.completed);

    return (incompleteTodos.length === 0 && 
        <p className="text-xl text-gray-500 italic my-12 px-6 py-8 border border-dashed border-gray-300 rounded-lg">
            ✨ Enjoy your day! Add some todos to get started.
        </p>
    );
}

export default WelcomeMessage;