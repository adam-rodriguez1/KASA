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
      <div className="collapse-header">
        <span>{title}</span>
        <FontAwesomeIcon onClick={toggleCollapse} icon={faChevronUp} className={`chevron ${isOpen ? "open" : ""}`} />
      </div>
      {isOpen && <div className="collapse-content">{content}</div>}
    </div>
  );
};

export default Collapse;
