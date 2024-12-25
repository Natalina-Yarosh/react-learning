import { FC } from "react";
import type { ToDoListItem as ToDoListItemProp } from "../types/todolist-types";
import { Text } from "./reusable/Text";
import { TodoListCreateStatuses } from '../types/todolist-statuses';

type ToDoListItemProps = {
  item: ToDoListItemProp;
  statuses?: TodoListCreateStatuses
  onTodoListDelete: (id: string | number) => void;
  onTodoListToggleCompleted: (id: string | number) => void;
};
export const ToDoListItem: FC<ToDoListItemProps> = ({
  item,
  onTodoListDelete,
  onTodoListToggleCompleted
}) => {


    
  return (
    <li className="list__item">
      <Text  className={item.completed ? 'completed' : ''} tag="span">{item.text}</Text>
      <div className="list__item__actions">
        <Text>Created - {new Date(item.created_at).toLocaleString()}</Text>
        <input onChange={() => onTodoListToggleCompleted(item.id)} type="checkbox" name="completed" checked={item.completed}/>
        <button onClick={() => onTodoListDelete(item.id)}>Delete</button>

      </div>
    </li>
  );
};
