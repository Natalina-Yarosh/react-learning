import { FC, useState } from "react"
import { ToDoListItem } from "./ToDoListItem"
import { useToDoList } from "../hooks/useToDoList"
import { TodoListCreateStatuses } from "../types/todolist-statuses"


type ToDoListProps = {
    bgColor?: string
}

export const ToDoList: FC<ToDoListProps> = ({ bgColor }) => {


    const { inputValue, setInputValue, statuses, toDoItems, addToDoItem, deleteTodoItem } = useToDoList()
    
    return (
        <div className="wrapper">
            <div className="container">

                <div className="box">
                    <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="input" type="text"/>
                    <button disabled={inputValue === ''} onClick={addToDoItem} className="btn">{statuses === TodoListCreateStatuses.LOADING ? 'Adding...' : 'Create'}</button>
                    
                </div>
                <ul style={{ backgroundColor: bgColor }} className="list" >
                    {toDoItems.map((item) => (
                        <ToDoListItem 
                            onTodoListDelete={deleteTodoItem} 
                            key={item.id} 
                            item={item}
                        />
                    ))}
                </ul>
            </div> 
        </div>
    )
}