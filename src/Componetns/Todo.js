import React, { useState } from "react";
import { addTodo, deleteTodo } from "../Actions/index";
import { useSelector, useDispatch } from "react-redux";
import { BiPlus, AiFillDelete } from "react-icons/all";

function Todo() {
  const [task, seTtask] = useState();
  const list = useSelector((state) => state.todoReducer.task);
  const dispatch = useDispatch();
  return (
    <>
      <div
        className="container main"
        style={{ backgroundColor: "white", width: "400px", height: "450px" }}
      >
        <div>
          <h1 className='heading'>Todo App</h1>
        </div>
        <div>
          <input
            className="input_field"
            type="text"
            placeholde="Add New Task Here"
            value={task}
            onChange={(e) => seTtask(e.target.value)}
          />
          <i
            onClick={() => dispatch(addTodo(task), seTtask(""))}
            className="icon_box"
          >
            <BiPlus className="icon1" />
          </i>
        </div>
        <div className="mt-4 task_div">
          {list.map((element) => {
            return (
              <ul key={element.id} className="task">
                <li className="list_task">
                  {element.data}
                  <i
                    onClick={() => dispatch(deleteTodo(element.id))}
                    className="icon_box2"
                  >
                    <AiFillDelete className="icon2" />
                  </i>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Todo;
