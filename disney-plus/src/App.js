import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Detail from "./components/Detail";

/*********** Components **************** */
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="detail" element={<Detail />} />
          <Route path="home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
