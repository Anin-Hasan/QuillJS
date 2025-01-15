import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill-new";
import "react-quill/dist/quill.snow.css";

const toolbarOptions = [
  ["bold", "italic", "underline", "strike"],
  ["blockquote", "code-block"],
  ["link", "image", "video", "formula"],
  [{ header: 1 }, { header: 2 }],
  [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
  [{ script: "sub" }, { script: "super" }],
  [{ indent: "-1" }, { indent: "+1" }],
  [{ direction: "rtl" }],
  [{ size: ["small", false, "large", "huge"] }],
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ color: [] }, { background: [] }],
  [{ font: [] }],
  [{ align: [] }],
  ["clean"],
];

function MyComponents() {
  const [value, setValue] = useState(() => {
    // Initialize state from local storage
    const savedValue = localStorage.getItem("quill-content");
    return savedValue ? savedValue : "";
  });

  useEffect(() => {
    // Save value to local storage whenever it changes
    localStorage.setItem("quill-content", value);
  }, [value]);

  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={setValue}
      modules={{ toolbar: toolbarOptions }}
    />
  );
}

export default MyComponents;
