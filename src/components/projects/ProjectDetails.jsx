import React from "react";
import { useParams } from "react-router-dom";

const ProjectDetails = (props) => {
    
    console.log(props);
    const { id } = useParams(); // ✅ Correct way to get the route parameter in v6
    console.log(id);
  return (
    <div className="container section project-details">
      <div className="card z-indepth-0">
        <div className="card-title">Project Title - {id} </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
          obcaecati voluptatem doloremque accusamus minus magnam exercitationem
          laudantium, sit, placeat quos inventore porro necessitatibus ipsam
          expedita blanditiis! Quis blanditiis obcaecati culpa?
        </p>
      </div>
      <div className="card-action gret lighten-4 grey-text">
        <div>Posted by DebTeam</div>
        <div>2nd September, 2am</div>
      </div>
    </div>
  );
};

export default ProjectDetails;
