import clsx from "clsx";
import React, { useState, useEffect, useRef } from "react";
import Checkbox from "./shared/Checkbox";
import { Todo } from "./Todo";
import { todoData } from "./TodoData";
import dynamic from "next/dynamic";
const ThemedImage = dynamic(() => import("./shared/themeImage"), {
  ssr: false,
});

const filters = ["all", "active", "completed"];
function Todos() {
  const [todos, setTodos] = useState(todoData);
  const [restTodos, setRestTodos] = useState(todos.length);
  const [filter, setFilter] = useState(filters[0]);
  const [checked, setChecked] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const clearCompleted = () => {
    const newTodos = todos.filter((item) => {
      return item.checked !== true;
    });
    setTodos(newTodos);
  };

  useEffect(() => {
    const items = todos.filter((todo) => todo.checked === false);
    setRestTodos(items.length);
  }, [todos]);

  console.log("todos");

  const showTodos =
    filter === "completed"
      ? todos.filter((item) => item.checked)
      : filter === "active"
      ? todos.filter((item) => !item.checked)
      : todos;

  return (
    <div>
      <div className="  bg-[url('/images/bg-mobile-light.jpg')] lg:bg-[url('/images/bg-desktop-light.jpg')] dark:bg-[url('/images/bg-mobile-dark.jpg')] dark:lg:bg-[url('/images/bg-desktop-dark.jpg')] bg-cover bg-no-repeat bg-top h-64 flex items-center">
        <div className=" w-[87%] lg:w-2/5 mx-auto">
          <div className="  flex justify-between lg:justify-between items-center">
            <h1 className=" uppercase font-bold letter-space font-josefin text-2xl text-white">todo</h1>
            <div className=" w-5 h-5 cursor-pointer">
              <ThemedImage />
            </div>
          </div>
          <div className=" pt-8 pb-1 w-full">
            <form
              onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault();

                setTodos([
                  ...todos,
                  {
                    id: todos.length + 1,
                    title: inputRef.current?.value as string,
                    checked: false,
                  },
                ]);
              }}
              className="relative flex items-center w-full "
            >
              <div className=" absolute top-1/2 -translate-y-1/2 left-4" onClick={() => setChecked((current) => !current)}>
                <Checkbox check={checked} />
              </div>

              <input
                ref={inputRef}
                type="text"
                className=" -mb-1 w-full dark:bgDark dark:text-gray-400 py-3 pl-11 rounded shadow-sm font-josefin focus:ring-0 focus:outline-none placeholder:text-gray-400"
                placeholder="Create a new todo..."
              />
            </form>
          </div>
        </div>
      </div>
      <div className=" w-[87%] lg:w-2/5 mx-auto -mt-11">
        {showTodos.map((item) => (
          <Todo key={item.id} item={item} todos={showTodos} setTodos={setTodos} />
        ))}
        <div className=" relative">
          <div className=" bg-white dark:bgDark dark:border-gray-500 rounded shadow-2xl dark:shadow-none shadow-gray-300 border-b border-gray-200 py-3">
            <div className=" text-xs font-josefin flex items-center justify-between text-gray-400 px-4">
              <div>
                <p> {restTodos} items left</p>
              </div>
              <div>
                <button onClick={clearCompleted}>Clear Completed</button>
              </div>
            </div>
          </div>
          <div className="dark:bgVeryDark bg-gray-100 rounded shadow-2xl dark:shadow-none dark:border-none shadow-gray-300 border-b border-gray-200 py-5">
            <div className=" dark:bgDark dark:text-gray-400 lg:absolute lg:top-0 lg:left-0 lg:translate-x-1/2 lg:py-2 lg:pt-3 bg-white rounded text-sm font-josefin text-blue-900 md:w-1/2 mx-auto flex items-center space-x-5 justify-center py-3">
              {filters.map((btn, index) => (
                <button
                  key={index}
                  className={clsx(" capitalize", filter === btn && "text-blue-400")}
                  onClick={() => setFilter(btn)}
                >
                  {btn}
                </button>
              ))}
            </div>
            <p className=" text-gray-400 font-josefin text-sm text-center pt-10 ">Drag and drop to reorder list</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todos;
