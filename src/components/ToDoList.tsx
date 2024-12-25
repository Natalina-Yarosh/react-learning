import { FC } from "react"
import { ToDoListItem } from "./ToDoListItem"
import { useToDoList } from "../hooks/useToDoList"
import { TodoListCreateStatuses } from "../types/todolist-statuses"


type ToDoListProps = {
    bgColor?: string
}

export const ToDoList: FC<ToDoListProps> = ({ bgColor }) => {


    const { 
        inputValue, 
        setInputValue, 
        addTodoItemByEnter, 
        statuses, 
        toggleCompleted,
        toDoItems, 
        addToDoItem, 
        deleteTodoItem 
    } = useToDoList()
    
    return (
        <div  style={{ backgroundColor: bgColor }} className="wrapper">
            <div className="container">

                <div className="box">
                    <input 
                        value={inputValue} 
                        onChange={(e) => setInputValue(e.target.value)} 
                        onKeyDown={addTodoItemByEnter} 
                        className="input" 
                        type="text"
                    />
                    <button 
                        disabled={inputValue === '' || statuses === TodoListCreateStatuses.LOADING} 
                        onClick={addToDoItem} 
                        className="btn">
                        {statuses === TodoListCreateStatuses.LOADING ? 'Adding...' : 'Create'}
                    </button>
                    
                </div>
                <ul className="list" >
                    {toDoItems.map((item) => (
                        <ToDoListItem
                            onTodoListToggleCompleted={toggleCompleted} 
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