import React, { useState } from "react";
import "./Collapse.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={toggleCollapse}>
        <span>{title}</span>
        <FontAwesomeIcon icon={faChevronUp} className={`chevron ${isOpen ? "open" : ""}`} />
      </div>

      <div className={`collapse-content ${isOpen ? "open" : ""}`}>{content}</div>
    </div>
  );
};

export default Collapse;
