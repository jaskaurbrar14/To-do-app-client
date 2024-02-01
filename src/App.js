import "./App.scss";
import HomePage from "./Pages/HomePage/HomePage.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return;
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  </>;
}

export default App;
