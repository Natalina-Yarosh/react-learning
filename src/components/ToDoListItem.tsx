import { FC } from "react"

type ToDoListItemProps = {
    text: string
}
export const ToDoListItem: FC<ToDoListItemProps> = ({text}) => {
    return (
        <li className="list__item">{text}</li>
    )
}