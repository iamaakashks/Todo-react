import { useState } from "react"
import Todoinput from "./components/Todoinput.jsx"
import Todolist from "./components/Todolist.jsx"
function App(){
  const [todoList, setTodoList] = useState(["Drink 4 Ltr water", "Go to Gym", "Revision OOPS"])
  function handleAddToDo(newTodos){
    const newTodoList = [...todoList, newTodos]
    setTodoList(newTodoList)
  }
  return (
    <div className="bg-slate-950 h-screen text-white p-10">
      <Todoinput handleAddToDo={handleAddToDo} />
      <Todolist todos={todoList} />
    </div>
  )
}

export default App;