import Todocard from "./Todocard"

export default function Todolist({todos, handleDeleteTodo}){
    
    return (
        <div className="w-1/3 mx-auto my-4 overflow-y-auto h-[80%]">
            <ul className="flex flex-col gap-4">
                {todos.map((items, index) => {
                    return(
                        <Todocard key={index} index={index} todoItems={items} handleDeleteTodo={handleDeleteTodo} ></Todocard>
                    ) 
                })}
            </ul>
        </div>
    )
}