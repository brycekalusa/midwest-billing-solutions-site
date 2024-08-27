import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Reviews from "./pages/Reviews";
import Thanks from "./pages/Thanks";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/team" element={<Team />}></Route>
        <Route path="/reviews" element={<Reviews />}></Route>
        <Route path="/thanks" element={<Thanks />}></Route>
      </Routes>
    </>
  );
}

export default App;
