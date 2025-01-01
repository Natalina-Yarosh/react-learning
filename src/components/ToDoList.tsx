import { FC } from "react"
import { ToDoListItem } from "./ToDoListItem"
import { useToDoList } from "../hooks/useToDoList"
import { TodoListCreateStatuses } from "../types/todolist-statuses"
import { Text } from "./reusable/Text"


type ToDoListProps = {
    bgColor?: string
}

export const ToDoList: FC<ToDoListProps> = ({ bgColor }) => {


    const { 
        inputValue, 
        setInputValue,
        toggleEditMode,
        addTodoItemByEnter, 
        statuses, 
        toggleCompleted,
        saveEditValues,
        toDoItems, 
        addToDoItem, 
        deleteTodoItem 
    } = useToDoList()

    const TodoListOutPut = toDoItems.length ? toDoItems.map((item) => (
        <ToDoListItem
            saveEditValues={saveEditValues}
            toggleEditMode={toggleEditMode}
            onTodoListToggleCompleted={toggleCompleted} 
            onTodoListDelete={deleteTodoItem} 
            key={item.id} 
            item={item}
        />
    )): <Text tag="h2">No notes yet</Text>
    
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
                    {TodoListOutPut}
                </ul>
            </div> 
        </div>
    )
}