import { FC } from "react"
import { ToDoListItem } from "./ToDoListItem"
import { useToDoList } from "../hooks/useToDoList"


type ToDoListProps = {
    bgColor?: string
}

export const ToDoList: FC<ToDoListProps> = ({ bgColor }) => {

    const { inputValue, setInputValue, toDoItems, addToDoItem } = useToDoList()
    
    return (
        <div className="wrapper">
            <div className="container">
                <div className="box">
                    <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="input" type="text"/>
                    <button disabled={inputValue === ''} onClick={addToDoItem} className="btn">create</button>
                    
                </div>
                <ul style={{ backgroundColor: bgColor }} className="list" >
                    {toDoItems.map((item) => (
                        <ToDoListItem key={item.id} item={item}/>
                    ))}
                </ul>
            </div> 
        </div>
    )
}