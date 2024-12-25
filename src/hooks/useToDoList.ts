import { useState } from "react";
import { ToDoListApp } from "../types/todolist-types";
import { useStatuses } from "./service/useStatuses";
import { delay } from "../utils/delay";

export const useToDoList = () =>   {
    const [inputValue, setInputValue] = useState<string>('');
    const {setLoading, setSuccess, setError, resetStatuses, statuses} = useStatuses()




    const [toDoItems, setToDoItems] = useState<ToDoListApp['todolistitems']>([]);
    const addToDoItem = async () => {
        try {
            setLoading()

            await delay(1000)
            setToDoItems([
                ...toDoItems, {
                id: crypto.randomUUID(),
                text: inputValue,
                created_at: Date.now(),
                completed: false
            }])
            setSuccess()
            setInputValue('')
        }
        catch (error) {
            setError()
        }
        finally {
             await delay(1000)
            resetStatuses()
        }
    }


    const deleteTodoItem = (id: string | number) => {

        setToDoItems(toDoItems.filter(item => item.id !== id))
    }
    return {
        inputValue,
        deleteTodoItem,
        setInputValue,
        statuses,
        toDoItems,
        addToDoItem
    }
}