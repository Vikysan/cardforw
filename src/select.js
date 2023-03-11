import React, { useState, useEffect } from "react";
import words from "./data/words.json";

const Select = (props) => {
  const [files] = useState([...new Set(words.map((item) => item.file))]);
  const [topics, setTopics] = useState([
    ...new Set(
      words.filter((item) => item.file === "1").map((item) => item.topic)
    ),
  ]);
  const [currentFile, setCurrentFile] = useState("1");
  const [currentTopic, setCurrentTopic] = useState("Food and Cooking");

  const onChange = (event) => {
    const value = event.target.value;
    setCurrentFile(value);
    setTopics([
      ...new Set(
        words.filter((item) => item.file === value).map((item) => item.topic)
      ),
    ]);
  };

  const onChangeTopics = (event) => {
    const value = event.target.value;
    setCurrentTopic(value);
    props.changeTopic(value, currentFile);
  };

  useEffect(() => {
    const localTopic = JSON.parse(localStorage.getItem("topic"));
    if (localTopic) {
      setTopics([
        ...new Set(
          words
            .filter((item) => item.file === localTopic.file)
            .map((item) => item.topic)
        ),
      ]);
      setCurrentFile(localTopic.file);
      setCurrentTopic(localTopic.topic);
    }
  }, []);

  return (
    <div>
      <select name="File" id="File" onChange={onChange}>
        {files.map((item, index) => (
          <option
            value={item}
            key={"f" + index}
            selected={currentFile === item}
          >
            {item}
          </option>
        ))}
      </select>
      <select name="Topic" id="Topic" onChange={onChangeTopics}>
        {topics.map((item, index) => (
          <option
            value={item}
            key={"t" + index}
            selected={currentTopic === item}
          >
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
