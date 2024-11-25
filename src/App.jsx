import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import { useState } from "react";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
