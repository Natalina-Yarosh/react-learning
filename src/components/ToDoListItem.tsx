import { ChangeEvent, FC, useState } from "react";
import type { ToDoListItem as ToDoListItemProp } from "../types/todolist-types";
import { Text } from "./reusable/Text";
import { TodoListCreateStatuses } from '../types/todolist-statuses';

type ToDoListItemProps = {
  item: ToDoListItemProp;
  statuses?: TodoListCreateStatuses;
  toggleEditMode: (id: string | number) => void;
  saveEditValues: (id: string | number, newText: string) => void;
  onTodoListDelete: (id: string | number) => void;
  onTodoListToggleCompleted: (id: string | number) => void;
};
export const ToDoListItem: FC<ToDoListItemProps> = ({
  item,
  onTodoListDelete,
  toggleEditMode,
  saveEditValues,
  onTodoListToggleCompleted
}) => {


    const [editValue, setEditValue] = useState<string>(item.text)

    const onChangeEditValue = (e: ChangeEvent<HTMLInputElement>) => {
        setEditValue(e.target.value)
    }

    
  return (
    <li className="list__item">
      <div className="flex align-center gap-3">
        {item.editing ? (
          <input
            autoFocus
            className="edit__input"
            type="text"
            value={editValue}
            onBlur={() => saveEditValues(item.id, editValue)}
            onChange={onChangeEditValue}
          />
        ) : (
          <Text className={item.completed ? "completed" : ""} tag="span">{item.text}</Text>
        )}
        <Text onClick={() => toggleEditMode(item.id)} className="edit">&#9999;</Text>
      </div>
      <div className="list__item__actions">
        <Text>Created - {new Date(item.created_at).toLocaleString()}</Text>
        <input onChange={() => onTodoListToggleCompleted(item.id)} type="checkbox" name="completed" checked={item.completed}/>
        <button onClick={() => onTodoListDelete(item.id)}>Delete</button>

      </div>
    </li>
  );
};
