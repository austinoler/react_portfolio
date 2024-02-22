import React from 'react';

const Project = ({ title, image, deployedLink, githubLink }) => {
  return (
    <div className="project">
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <a href={deployedLink}>Deployed Link</a>
      <a href={githubLink}>GitHub Link</a>
    </div>
  );
};

export default Project;