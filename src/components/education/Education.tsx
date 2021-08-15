import React from "react";
import { AcademicCapIcon } from "@heroicons/react/solid";
import { education } from "../../data";
import "./Education.scss";
import { useInView } from "react-intersection-observer";
import Utils from "../Utils";
import EducationCardItem from "./EducationCardItem";
export default function Education() {
  const [refSection, inViewSection, entrySection] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section className="section-container" id="education">
      <div
        ref={refSection}
        className="section-subcontainer"
        animation-name="fade-up"
        animation-duration="500"
        style={Utils.animate(inViewSection, entrySection)}
      >
        <h1 className="section-container-title">Education</h1>
        <div className="education-list-timeline">
          {education.map((educationElement, index: number) => (
            <EducationCardItem educationElement={educationElement} index={index}/>
          ))}
        </div>
      </div>
    </section>
  );
}
