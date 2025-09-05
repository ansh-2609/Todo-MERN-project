import AddTodo from "./Components/AddTodo"
import AppName from "./Components/AppName"
import "./App.css";
import TodoItems from "./Components/TodoItems";
import WelcomeMessage from "./Components/WelcomeMessage";
import TodoItemContextProvider  from "./store/todo-item-store";



function App() {
  return (
    <TodoItemContextProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
        <div className="container mx-auto max-w-4xl flex flex-col items-center bg-white/50 backdrop-blur-sm rounded-2xl py-8 px-6 shadow-xl">
          <AppName/>
          <AddTodo/>
          <WelcomeMessage/>
          <TodoItems/>
        </div>
      </div>
    </TodoItemContextProvider>
  );
}

export default App;
