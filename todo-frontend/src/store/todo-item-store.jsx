import { createContext, useEffect } from "react";
import { useReducer } from "react";
import { addItemServer, deleteItemServer, getItemsServer, markItemCompleteServer } from "../services/itemServices";

export const TodoItemContext = createContext({
    todoitems: [],
    addNewItem: () => {},
    deleteItem: () => {},
    toggleComplete: () => {}
});

const todoitemReducer = (currtodoitem, action) => {

  let newtodoItem = currtodoitem;

  if(action.type === "NEW_ITEM"){

    newtodoItem = [
      ...currtodoitem, 
      action.payload,
    ];
  }
  else if(action.type === "DELETE_ITEM"){
    newtodoItem = currtodoitem.filter((item) => item.id !== action.payload.todoItemId);
  }
  else if(action.type === "SHOW_ITEMS"){
    newtodoItem = action.payload;
  }
  else if(action.type === "TOGGLE_COMPLETE"){
    newtodoItem = currtodoitem.map(item => 
        item.id === action.payload.id 
            ? {...item, completed: action.payload.completed}
            : item
    );
  }
  return newtodoItem;
};

const TodoItemContextProvider = ({children}) => {
    let [todoitems, dispatchtodoitems] = useReducer(todoitemReducer, []);

    

    useEffect(() => {
      showItems();
    }, []);

    const addNewItem = async (newname, newdate) => {
      const item = await addItemServer(newname, newdate);
        
        let newtitemAction = {
        type : "NEW_ITEM",
        payload : item,
        };

        dispatchtodoitems(newtitemAction);
    };

    const showItems = async () => {
      const items = await getItemsServer();

      let showItemsAction = {
        type: "SHOW_ITEMS",
        payload: items,
      };

      dispatchtodoitems(showItemsAction);
    };

    const deleteItem = async (todoid) => {
      const id  = await deleteItemServer(todoid);
      let deleteitemAction = {
        type: "DELETE_ITEM",
        payload: {
          todoItemId: id,
        },
      };

      dispatchtodoitems(deleteitemAction);
    };

    const toggleComplete = async (todoId) => {
      console.log('inside toggleComplete');
        const updatedItem = await markItemCompleteServer(todoId);
        console.log('Updated Item:', updatedItem);
        dispatchtodoitems({
            type: "TOGGLE_COMPLETE",
            payload: updatedItem
        });
    };

    return (
    <TodoItemContext.Provider 
    value = {{todoitems:todoitems,
              addNewItem:addNewItem,
              deleteItem: deleteItem,
              toggleComplete: toggleComplete}}>
    {children}
    </TodoItemContext.Provider>
    );
};

export default TodoItemContextProvider;