import { Routes, Route } from "react-router-dom";

import Navbar from "./component/navbar/Navbar";
import CreateBlog from "./pages/createBlog/CreateBlog";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/details" element={<CreateBlog />} />
      </Routes>
    </>
  );
}

export default App;
