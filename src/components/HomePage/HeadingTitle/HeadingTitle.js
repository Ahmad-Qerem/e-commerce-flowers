import React from "react";
import "./HeadingTitle.css";

const HeadingTitle = (props) => {
  const { title } = props;
  return <div className="headingTitle">{title}</div>;
};

export default HeadingTitle;
