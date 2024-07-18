import "./App.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Screens/Home";
import Products from "./Screens/Products";

function App() {
  return (
    <div className="overflow-hidden font-Lato ">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
