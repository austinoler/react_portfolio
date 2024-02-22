import React from 'react';
import Project from '../components/Project';

const Portfolio = () => {
  return (
    <div>
      <h2>Portfolio</h2>
      <Project
        title="portfollio 1"
        image="project1.jpg"
        deployedLink="https://austinoler.github.io/portfolio/"
        githubLink="https://github.com/austinoler/portfolio"
      />
      <Project
        title="coding quiz"
        image="project2.jpg"
        deployedLink="https://austinoler.github.io/code_quiz/"
        githubLink="https://github.com/austinoler/code_quiz"
      />
    </div>
  );
};

export default Portfolio;
