import React from "react";
import { useInView } from "react-intersection-observer";
import { about, languages, skills } from "../../data";
import Utils from "../Utils";
import "./About.scss";
import Bar from "./Bar";

function About() {
  const [refSection, inViewSection, entrySection] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="section-container" id="about">
      <div
        ref={refSection}
        className="section-subcontainer"
        animation-name="fade-up"
        animation-duration="1000"
        style={Utils.animate(inViewSection, entrySection)}
      >
        <h1 className="section-container-title text-m">About me</h1>
        <div className="section-content-about">
          <div className="about-picture-language">
            <img className="profile-picture" src="user.jpg" alt="User"></img>
            <div className="language-container">
              {languages.map((language,index) => (
                <div key={`lang-${index}`}className="language-image-container">
                  <img src={language.icon}  alt={language.language}></img>
                </div>
              ))}
            </div>
          </div>

          <div className="about-description-skills">
            <p
              className="paragraph .text-s"
              dangerouslySetInnerHTML={{ __html: about }}
            ></p>
            <div className="skill-bars">
            {skills.map((skill,index) => <Bar key={`bar-${index}`} skill={skill} index={index}/>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

// function animate(entry: IntersectionObserverEntry | undefined) {
