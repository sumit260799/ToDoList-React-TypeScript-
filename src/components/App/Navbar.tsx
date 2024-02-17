import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";

const Navbar = () => {
  const [searchParams] = useSearchParams();
  let todoUrl = searchParams.get("todos");

  return (
    <Wrapper>
      <Link className={todoUrl === null ? "active" : ""} to="/">
        All
      </Link>
      <Link
        className={todoUrl === "active" ? "active" : ""}
        to="/?todos=active"
      >
        Active
      </Link>
      <Link
        className={todoUrl === "completed" ? "active" : ""}
        to="/?todos=completed"
      >
        Completed
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  width: calc(100% - 50px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px auto;
  a {
    color: #334155;
    font-size: 20px;
    text-decoration: underline;
    font-weight: 500;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
  .active {
    color: #0284c7;
  }
`;
export default Navbar;
