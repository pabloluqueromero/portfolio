import React from "react";
import { useInView } from "react-intersection-observer";
import { jobs } from "../../data";
import Utils from "../Utils";

import "./Experience.scss";
export default function Experience() {
  const [refSection, inViewSection, entrySection] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <section className="section-container" id="experience">
      <div
        ref={refSection}
        className="section-subcontainer"
        animation-name="fade-up"
        animation-duration="500"
        style={Utils.animate(inViewSection, entrySection)}
      >
        <h1 className="section-container-title text-m">Experience</h1>
        <div className="experience-container">
          {jobs.map((_, index) => {
            if (index === 0)
              return (
                <input
                  id={`tab${index + 1}`}
                  key={`tab-rad-${index + 1}`}
                  type="radio"
                  name="controls"
                  defaultChecked
                />
              );
            return (
              <input key={`tab-rad-${index + 1}`} id={`tab${index + 1}`} type="radio" name="controls" />
            );
          })}

          <div className="controls-container">
            {jobs.map((_, index) => (
              <label
                key={`tab-${index}`}
                htmlFor={`tab${index + 1}`}
                className="tab-indicator"
              ></label>
            ))}
          </div>

          <div className="carousel">
            <div className="carousel-list">
              {jobs.map((job,index) => (
                <div key={`exp-${index}`} className="carousel-item">
                  <div className="job-title text-l">{job.title}</div>
                  <div className="job-logo text-xl">{job.logo}</div>
                  <div className="job-date text-s"><span>{job.from} - {job.to}</span></div>
                  <p className="job-description text-m">{job.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* <section className="section-container" id="experience">
      <div
        ref={refSection}
        className="section-subcontainer"
        animation-name="fade-up"
        animation-duration="500"
        style={Utils.animate(inViewSection, entrySection)}>
        <h1 className="section-container-title text-m">
          Experience
        </h1>
        <div className="experience-carousel">

            <div className="controls-container">
              <input type="radio" id="tab1" name="tab-control" defaultChecked />
              <input type="radio" id="tab2" name="tab-control" />

              <label htmlFor="tab1" className="radio-circle"></label>
              <label htmlFor="tab2" className="radio-circle"></label>
            </div> 

            <div id="carousel" className="slides">
              <ul className="slide-list">
                <li className="slide-list-item">
                  <div>Internship</div>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
    </section> */
