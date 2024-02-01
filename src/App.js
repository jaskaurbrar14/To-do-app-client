import "./App.scss";
import HomePage from "./Pages/HomePage/HomePage.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Main from "./components/Main/Main.js";
// import Header from "./components/Header/Header.js";
// import Calendar from "./components/Calendar/Calendar.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
