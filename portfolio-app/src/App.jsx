import "./App.css";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Main from "./components/Main";
import NotFound from "./components/NotFound";
import Works from "./components/Works";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/proyectos" element={<Works />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
