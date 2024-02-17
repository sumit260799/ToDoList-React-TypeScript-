import { useState } from "react";
import getTodos from "./store/Todos";
import styled from "styled-components";

const AddToDo = () => {
  const { addTodo } = getTodos();
  const [formValue, setFormValue] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(formValue);
    setFormValue("");
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setFormValue(e.target.value)}
          value={formValue}
          placeholder="Write Something Here.."
        />
        <button type="submit">Add</button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  form {
    width: 100%;
    margin: 10px auto;
    input {
      width: 300px;
      padding: 5px 12px;
      outline: none;
      font-size: 18px;
      border: 1px solid #d1d5db;
    }
    button {
      width: 80px;
      padding: 5px;
      font-size: 18px;
      outline: none;
      border: 1px solid #9ca3af;
      color: white;
      background-color: #0284c7;
    }
  }
  @media screen and (max-width: 450px) {
    input {
      max-width: 150px;
    }
    button {
      width: 60px;
    }
  }
`;

export default AddToDo;
