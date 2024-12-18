import { FC, useState } from "react"
import { ToDoListItem } from "./ToDoListItem"


type ToDoListProps = {
    bgColor?: string
}

export const ToDoList: FC<ToDoListProps> = ({ bgColor }) => {
    const [inputValue, setInputValue] = useState<string>('');
    const [toDoItems, setToDoItems] = useState<string[]>([]);
    const addToDoItem =() => {
        setToDoItems([...toDoItems, inputValue])
        setInputValue('')
    }
    return (
        <div className="wrapper">
            <div className="container">
                <div className="box">
                    <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="input" type="text"/>
                    <button disabled={inputValue === ''} onClick={addToDoItem} className="btn">create</button>
                    
                </div>
                <ul style={{ backgroundColor: bgColor }} className="list" >
                    {toDoItems.map((item, index) => (
                        <ToDoListItem key={index} text={item} />
                    ))}
                </ul>
            </div> 
        </div>
    )
}