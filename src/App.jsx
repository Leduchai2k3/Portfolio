import { Route, Routes } from "react-router-dom";
import "./App.css";
import Background from "./components/Background";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="max-h-screen overflow-hidden bg-black max-w-screen">
      <Background></Background>
      <div className="fixed top-0 left-0 w-full h-full py-[5%] pl-[100px] flex gap-[90px]">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/work" element={<Work></Work>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
        </Routes>
        <NavBar></NavBar>
      </div>
    </div>
  );
}

export default App;
