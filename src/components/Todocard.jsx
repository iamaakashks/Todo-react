export default function Todocard(props){
    
    return (
        <div className="bg-purple-500 text-xl font-semibold rounded flex items-center justify-between px-4 py-2">
            {props.todoItems}
            <div>
                <i className="fa-regular fa-pen-to-square mr-2"></i>
                <i className="fa-solid fa-trash"></i>
            </div>                            
        </div>
    )
}