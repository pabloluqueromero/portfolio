import React from "react";
import { useInView } from "react-intersection-observer";
import { projects } from "../../data";
import Utils from "../Utils";

import "./Projects.scss";
export default function Projects() {
  const [refSection, inViewSection, entrySection] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
  return (
    <section className="section-container" id="projects">
      <div
        ref={refSection}
        className="section-subcontainer"
        animation-name="fade-up"
        animation-duration="500"
        style={Utils.animate(inViewSection, entrySection)}
      >
        <h1 className="section-container-title text-m">Projects</h1>
        <div className="project-containter">
          {projects.map((project,index) => {
            if (project.link) {
              return (
                <div
                  className="project-card"
                  key={`proj-${index}`}
                >
                  <div className="project-card-img">
                    <img src={project.image} alt={project.alt}></img>
                    <div className="project-card-description text-m">
                      {project.description}
                    </div>
                  </div>
                  <div className="project-card-title text-m">
                    {project.title}
                  </div>
                  <div className="project-card-subtitle text-xs">
                    {project.status}
                  </div>

                  <div className="project-card-links">
                    <a className="project-card-link text-m" href={project.code}>
                      Code
                    </a>
                    <div className="vertical-divider-container">
                      <div className="vertical-divider" />
                    </div>
                    <a className="project-card-link text-m" href={project.link}>
                      Website
                    </a>
                  </div>
                </div>
              );
            }
            return (
              <div
                className="project-card"
                key={`proj-${index}`}
              >
                <div className="project-card-img">
                  <img src={project.image} alt={project.alt}></img>
                  <div className="project-card-description text-m">
                    {project.description}
                  </div>
                </div>
                <div className="project-card-title text-m">{project.title}</div>
                <div className="project-card-subtitle text-xs">
                  {project.status}
                </div>
                <div className="project-card-links">
                  <a className="project-card-link text-m" href={project.code}>
                    Code
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
