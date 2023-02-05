import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LayoutComponent from "./components/layout/LayoutComponent";
import Header from "./components/navbar/Header";
import "./App.scss";
const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/stvdy" element={<LayoutComponent />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
