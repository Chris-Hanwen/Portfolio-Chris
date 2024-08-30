import React from 'react';
import styles from './ProjectsStyles.module.css';
import ProjectCard from './ProjectCard.jsx/ProjectCard';
import projectData from '../../data/projectData.js';

function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
        {projectData.map((item) => (
          <ProjectCard
            key={item.id}
            src={item.src}
            link={item.link}
            h3={item.h3}
            p={item.p}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
