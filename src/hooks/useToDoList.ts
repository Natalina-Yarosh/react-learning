import { useState } from "react";
import { ToDoListApp } from "../types/todolist-types";

export const useToDoList = () =>   {
    const [inputValue, setInputValue] = useState<string>('');




    const [toDoItems, setToDoItems] = useState<ToDoListApp['todolistitems']>([]);
    const addToDoItem =() => {
        setToDoItems([...toDoItems, {
            id: crypto.randomUUID(),
            text: inputValue,
            created_at: Date.now(),
            completed: false
        }])
        setInputValue('')
    }
    return {
        inputValue,
        setInputValue,
        toDoItems,
        addToDoItem
    }
}