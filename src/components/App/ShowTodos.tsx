import styled from "styled-components";
import getTodos from "./store/Todos";
import { useSearchParams } from "react-router-dom";

const ShowTodos = () => {
  const { todos, toggleToDo, deleteToDo } = getTodos();
  const [searchParams] = useSearchParams();
  let todoUrl = searchParams.get("todos");
  console.log("tot", typeof todos);

  let filterData = todos;

  if (todoUrl === "active") {
    filterData = filterData.filter((task) => !task.completed);
  }
  if (todoUrl === "completed") {
    filterData = filterData.filter((task) => task.completed);
  }

  return (
    <Wrapper>
      <div>
        {filterData?.map((todo) => {
          return (
            <div key={todo.id}>
              <input
                type="checkbox"
                onChange={() => toggleToDo(todo.id)}
                checked={todo.completed}
              />
              <label
                className="todotext"
                style={{ textDecoration: todo.completed ? "line-through" : "" }}
                htmlFor=""
              >
                {todo.todo}
              </label>
              {todo.completed && (
                <button onClick={() => deleteToDo(todo.id)}>Delete</button>
              )}
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  div {
    display: block;
    font-size: 25px;
    padding: 5px 0;
    div {
      margin: 5px auto;
      padding: 8px 20px;
      background-color: #e0f2fe;
      display: flex;
      justify-content: space-between;
      .todotext {
        color: #0891b2;
        font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
        font-size: 20px;
      }
      button {
        background-color: red;
        color: white;
        outline: none;
        border: none;
        cursor: pointer;
      }
    }
  }
`;

export default ShowTodos;
