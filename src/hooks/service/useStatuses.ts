import { useState } from "react"
import { TodoListCreateStatuses } from "../../types/todolist-statuses"

    /**
     * Returns an object with the following properties:
     * - statuses: The current status of a todo list create operation. 
     *   One of the values of the TodoListCreateStatuses enum.
     * - setLoading: A function to set the status to LOADING.
     * - setSuccess: A function to set the status to SUCCESS.
     * - setError: A function to set the status to ERROR.
     * - resetStatuses: A function to reset the status to IDLE.
     */
export const useStatuses = () => {
    const [statuses, setStatus] = useState<TodoListCreateStatuses>(TodoListCreateStatuses.IDLE)

    const setLoading = () => setStatus(TodoListCreateStatuses.LOADING)
    const setSuccess = () => setStatus(TodoListCreateStatuses.SUCCESS)
    const setError = () => setStatus(TodoListCreateStatuses.ERROR) 
    
    
    const resetStatuses = () => setStatus(TodoListCreateStatuses.IDLE)

    return {statuses, setLoading, setSuccess, setError, resetStatuses}
}