import { useRef, useContext } from "react";
import { BiMessageAdd } from "react-icons/bi";
import { TodoItemContext } from "../store/todo-item-store";

function AddTodo(){
  
    const {addNewItem} = useContext(TodoItemContext);

    const textValueElement = useRef();
    const dateValueElement = useRef();

    const onClickbutton = (event) => {
      event.preventDefault();
      const textValue = textValueElement.current.value;
      const dateValue = dateValueElement.current.value;
      addNewItem(textValue, dateValue);
      textValueElement.current.value = "";
      dateValueElement.current.value = "";
    };

    return <div className="w-full max-w-4xl mx-auto px-4 mb-12">
      <form className="grid grid-cols-12 gap-4" onSubmit={onClickbutton}>
        <div className="col-span-7">
          <input 
            type="text" 
            placeholder="Enter todo here" 
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm hover:shadow-md transition-shadow"
            ref={textValueElement}
          />
        </div>
        <div className="col-span-4">
          <input 
            type="date" 
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm hover:shadow-md transition-shadow"
            ref={dateValueElement}
          />
        </div>
        <div className="col-span-1">
          <button type="submit" className="w-full h-full p-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all shadow-sm hover:shadow-md flex items-center justify-center">
            <BiMessageAdd className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div> 
}

export default AddTodo;