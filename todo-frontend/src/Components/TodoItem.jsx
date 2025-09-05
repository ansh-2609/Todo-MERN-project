import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import { TodoItemContext } from "../store/todo-item-store";

function TodoItem(props){
    const {deleteItem, toggleComplete} = useContext(TodoItemContext);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return <div className="w-full mb-4">
      <div className="grid grid-cols-12 gap-4 bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100">
        <div className="col-span-1 flex items-center">
          <button 
            onClick={() => toggleComplete(props.TodoId)}
            className={`p-2 rounded-lg transition-colors ${props.completed ? 'text-green-500 hover:text-green-600' : 'text-gray-400 hover:text-gray-600'}`}
          >
            {props.completed ? <MdCheckBox size={20} /> : <MdCheckBoxOutlineBlank size={20} />}
          </button>
        </div>
        <div className={`col-span-6 flex items-center text-gray-800 font-medium ${props.completed ? 'line-through' : ''}`}>
          {props.TodoName}
        </div>
        <div className="col-span-4 flex items-center text-gray-600 pl-4">
          {formatDate(props.TodoDate)}
        </div>
        <div className="col-span-1 flex items-center">
          <button 
            onClick={() => deleteItem(props.TodoId)}
            className="w-full p-2 text-gray-400 hover:text-red-500 transition-colors rounded-lg hover:bg-red-50"
          >
            <AiFillDelete size={20} />
          </button>
        </div>
      </div>
    </div>
}

export default TodoItem;