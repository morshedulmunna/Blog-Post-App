import { Routes, Route } from "react-router-dom";
import Footer from "./component/footer/Footer";

import Navbar from "./component/navbar/Navbar";
import CreateBlog from "./pages/createBlog/CreateBlog";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/details" element={<CreateBlog />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
