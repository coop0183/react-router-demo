import { Routes, Route } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Reviews from "../Reviews/Reviews";
import AboutMe from "../AboutMe/AboutMe";
import "./App.css";
import Header from "../Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
      <Routes>
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
      <Routes>
        <Route path="/aboutme" element={<AboutMe />} />
      </Routes>
    </div>
  );
}

export default App;
