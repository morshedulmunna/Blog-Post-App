import React, { useEffect, useState } from "react";

const useDataLoad = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  // Data Load ==>
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => {
        setAllBlogs(data);
        setBlogs(data);
      });
  }, []);

  return [allBlogs, setAllBlogs];
};

export default useDataLoad;
