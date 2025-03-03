import { useState } from "react"
import Todoinput from "./components/Todoinput.jsx"
import Todolist from "./components/Todolist.jsx"
function App(){
  const [todoList, setTodoList] = useState([])
  function handleAddToDo(newTodos){
    const newTodoList = [...todoList, newTodos]
    setTodoList(newTodoList)
  }
  function handleCompleted(){

  }
  function handleDeleteTodo(index){
    const newTodoList = todoList.filter((todo, todoIndex)=>{
      return todoIndex !== index
    })
    setTodoList(newTodoList)
  }
  return (
    <div className="bg-slate-950 h-screen text-white p-10">
      <Todoinput handleAddToDo={handleAddToDo} handleCompleted={handleCompleted} />
      <Todolist todos={todoList} handleDeleteTodo={handleDeleteTodo} />
    </div>
  )
}

export default App;