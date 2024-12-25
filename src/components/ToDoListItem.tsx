import { FC } from "react"
import type { ToDoListItem as ToDoListItemProp } from "../types/todolist-types"

type ToDoListItemProps = {
    item: ToDoListItemProp
    onTodoListDelete: (id: string | number) => void


}
export const ToDoListItem: FC<ToDoListItemProps> = ({item, onTodoListDelete}) => {

    return (
       
        
        <li className="list__item">
            <span>{item.text}</span>
            <button onClick={() => onTodoListDelete(item.id)}>X</button>

        </li>
            
        
        
        
        
        
    )
}