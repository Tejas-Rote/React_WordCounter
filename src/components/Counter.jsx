// import React from 'react'
import { useState } from "react";
import "./counter.css";
const Counter = () => {
  const [text, settext] = useState("");
  const handleChange = (event) => {
    settext(event.target.value);
    console.log(text);
  };

  const wordCount = text
    .trim()
    .split(" ")
    .filter((word) => word !== "").length;

  return (
    <div className="para">
      <div className="para-content">
        <h1>Responsive paragraph word counter</h1>
        <textarea
          name=""
          id="words"
          cols="50"
          rows="10"
          placeholder="Enter your text here..."
          onChange={handleChange}
        ></textarea>
        <p className="text">Word Count : {wordCount}</p>
      </div>
    </div>
  );
};

export default Counter;
