import AddToDo from "./AddToDo";
import Navbar from "./Navbar";
import ShowTodos from "./ShowTodos";
import styled from "styled-components";
const ToDo = () => {
  return (
    <Wrapper>
      <h2>ToDoList APP(React+TypeScript)</h2>
      <AddToDo />
      <Navbar />
      <ShowTodos />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  max-width: 700px;
  width: 100%;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 1px solid #d1d5db;
  background-color: #f3f4f6;
  color: #0891b2;
  border-radius: 10px;
  font-family: "Courier New", Courier, monospace;
`;
export default ToDo;
