import ToDo from "./components/App/ToDo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ToDo />} />
      </Routes>
    </Router>
  );
};

export default App;
