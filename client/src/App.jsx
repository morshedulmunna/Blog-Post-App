import { Routes, Route } from "react-router-dom";
import React from "react";
import Footer from "./component/footer/Footer";
import Navbar from "./component/navbar/Navbar";
import useDataLoad from "./hooks/useDataLoad";
import CreateBlog from "./pages/createBlog/CreateBlog";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

export const BlogsData = React.createContext();

function App() {
  const [allBlogs, setAllBlogs] = useDataLoad();

  return (
    <>
      <BlogsData.Provider value={allBlogs}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/details" element={<CreateBlog />} />
        </Routes>
        <Footer />
      </BlogsData.Provider>
    </>
  );
}

export default App;
