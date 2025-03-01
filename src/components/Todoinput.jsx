import { useState } from "react"

export default function Todoinput({handleAddToDo}){
    const [todoValue, setTodoValue] = useState('')
    return (
        <div className="w-1/3 mx-auto">
            <h1 className="font-['pacifico'] font-bold text-2xl text-purple-600 text-center">Todo App</h1>
            <div className='w-full border-t-[1px] my-4'></div>
            <div className="flex justify-evenly font-bold text-xl">
                <input value={todoValue} onChange={(e)=>{setTodoValue(e.target.value)}} placeholder="Add To-Do" className="bg-transparent rounded-md px-2 py-1 outline-none w-2/3 border-[1px]" />
                <button onClick={()=>{
                    handleAddToDo(todoValue)
                    setTodoValue('')
                }} className="bg-purple-600 rounded-md hover:opacity-80 px-2 py-1 border-[1px]">Add</button>
            </div>
        </div>
    )
}