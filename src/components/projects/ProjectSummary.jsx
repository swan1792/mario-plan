import React from "react";

const ProjectSummary = ({project}) => {
  return (
    <div className="card z-depth-0 project-summary s12">
      <div className="card-content">
        <span className="card-title">{project.title}</span>
        <p>{project.content}</p>
        <p className="grey-text">3rd September</p>
      </div>
    </div>
  );
};

export default ProjectSummary;