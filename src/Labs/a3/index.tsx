import ConditionalOutput from "./ConditionalOutput";
import JavaScript from "./Javascript";
import Add1 from "./Routing/Add";
import PathParameters from "./Routing/PathParameters";
import Classes from "./css/Classes";
import Styles from "./css/Styles";
import Highlight from "./Highlight";
import Add from "./Add";
import TodoList from "./todos/TodoList";
import { useSelector } from "react-redux";
import { LabState } from "../store";

function Assignment3() {
  // const { todos } = useSelector((state: LabState) => state.todosReducer);

  return (
    <div>
      <h1>Assignment 3</h1>
      {/* <ul className="list-group">
        {todos.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul> */}
      <TodoList />
      <Add a={3} b={4} /> <br />
      <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione
        eaque illo minus cum, saepe totam vel nihil repellat nemo explicabo
        excepturi consectetur. Modi omnis minus sequi maiores, provident
        voluptates.
      </Highlight>
      <ConditionalOutput />
      <Styles />
      <Classes />
      <PathParameters />
      <Add1 />
      <JavaScript />
    </div>
  );
}

export default Assignment3;
