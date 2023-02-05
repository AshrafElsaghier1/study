import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import LayoutComponent from "./components/layout/LayoutComponent";
import Header from "./components/navbar/Header";
import "./App.scss";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/study" />} />
        <Route path="/study" element={<LayoutComponent />} />
      </Routes>
    </Router>
  );
};

export default App;
