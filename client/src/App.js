import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./App.css"

function App() {
  return (
    <>
      <BrowserRouter>
	  <Routes>
		<Route path="/" element={<div><h1>home</h1></div>}></Route>
		<Route path="/login" element={<Login></Login>}></Route>
		<Route path="/register" element={<Register></Register>}></Route>
	  </Routes>
	  </BrowserRouter>
    </>
  );
}

export default App;
