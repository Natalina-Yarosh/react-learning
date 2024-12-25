import { FC } from "react";
import type { ToDoListItem as ToDoListItemProp } from "../types/todolist-types";
import { Text } from "./reusable/Text";

type ToDoListItemProps = {
  item: ToDoListItemProp;
  onTodoListDelete: (id: string | number) => void;
};
export const ToDoListItem: FC<ToDoListItemProps> = ({
  item,
  onTodoListDelete,
}) => {
  return (
    <li className="list__item">
      <Text tag="span">{item.text}</Text>
      <button onClick={() => onTodoListDelete(item.id)}>X</button>
    </li>
  );
};
