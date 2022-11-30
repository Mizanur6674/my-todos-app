import React from "react";
import clsx from "clsx";
import { TodoType } from "../../DataType";
import Checkbox from "./shared/Checkbox";

export interface Props {
  item: TodoType;
  todos: TodoType[];
  setTodos: any;
}

export const Todo: React.FC<Props> = ({ item, todos, setTodos }) => {
  const handleDelete = (id: number) => {
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  };

  const handleChecked = () => {
    const newTodos = todos.map((todo) => {
      if (todo.id === item.id) {
        return { ...item, checked: !item.checked };
      } else {
        return todo;
      }
    });

    setTodos(newTodos);
  };

  return (
    <div>
      <div className="dark:bgDark bg-white rounded shadow-2xl dark:shadow-none dark:border-gray-500 font-josefin shadow-gray-300 border-b border-gray-200 py-3">
        <div className="  flex justify-between items-center px-4">
          <div className=" flex items-center space-x-3">
            <div onClick={handleChecked}>
              <Checkbox check={item.checked} />
            </div>

            <h1
              className={clsx(
                " text-blue-900 dark:text-gray-400 text-xs font-josefin font-bold",
                item.checked && " line-through text-gray-300"
              )}
            >
              {item.title}
            </h1>
          </div>

          <button onClick={() => handleDelete(item.id)}>
            <img src="/images/icon-cross.svg" alt="cross icon" className=" w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
