import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutComponent from "./components/layout/LayoutComponent";
import Header from "./components/navbar/Header";
import "./App.scss";
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<LayoutComponent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
