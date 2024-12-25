import { FC } from "react"
import type { ToDoListItem as ToDoListItemProp } from "../types/todolist-types"

type ToDoListItemProps = {
    item: ToDoListItemProp
}
export const ToDoListItem: FC<ToDoListItemProps> = ({item}) => {
    return (
        <li className="list__item">{item.text}</li>
    )
}