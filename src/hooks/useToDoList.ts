import {KeyboardEvent, useEffect, useState } from "react";
import { ToDoListApp } from "../types/todolist-types";
import { useStatuses } from "./service/useStatuses";
import { delay } from "../utils/delay";

export const useToDoList = () =>   {
    const [inputValue, setInputValue] = useState<string>('');
    const {setLoading, setSuccess, setError, resetStatuses, statuses} = useStatuses()
    const [toDoItems, setToDoItems] = useState<ToDoListApp['todolistitems']>(localStorage.getItem('toDoItems') ? JSON.parse(localStorage.getItem('toDoItems') as string) : []);






    const saveEditValues = (id: string | number, newText: string) => {
        if(!newText){
            alert('Please enter text')
            return
        }
        
        setToDoItems(toDoItems.map(item => item.id === id ? {...item, text: newText, editing: false} : item))
    }

   

    const toggleEditMode = (id: string | number) => {
        setToDoItems(toDoItems.map(item => item.id === id ? {...item, editing: !item.editing} : item))
    }

    const toggleCompleted = (id: string | number) => {
        setToDoItems(toDoItems.map(item => item.id === id ? {...item, completed: !item.completed} : item))
    }
    const addToDoItem = async () => {
        if(inputValue === '') return

        try {
            setLoading()

            await delay(500)
            setToDoItems([
                ...toDoItems, {
                id: crypto.randomUUID(),
                text: inputValue,
                editing: false,
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
             await delay(500)
            resetStatuses()
        }
    }

    const addTodoItemByEnter = (e: KeyboardEvent) => {
        
        if(e.key === 'Enter') {
            addToDoItem()
        }
    }


    const deleteTodoItem = async (id: string | number) => {

     
        setToDoItems(toDoItems.filter(item => item.id !== id))
       
       
    }


    useEffect(() => {

        localStorage.setItem('toDoItems', JSON.stringify(toDoItems))
    }, [toDoItems])
    return {
        inputValue,
        deleteTodoItem,
        setInputValue,
        toggleEditMode,
        saveEditValues,
        addTodoItemByEnter,
        toggleCompleted,
        statuses,
        toDoItems,
        addToDoItem
    }
}