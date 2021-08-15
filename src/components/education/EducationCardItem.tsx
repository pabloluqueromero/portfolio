import { AcademicCapIcon } from "@heroicons/react/solid";
import React from "react";
import { useInView } from "react-intersection-observer";
import Utils from "../Utils";

function EducationCardItem(props: {
  index: number;
  educationElement: {
    school: string;
    year: string;
    title: string;
    grade: string;
    description: string;
  };
}) {
  const [refCard, inViewCard, entryCard] = useInView({ threshold: 0.2 });
  const [refCap, inViewCap, entryCap] = useInView({ threshold: 0.2 });
  const [refContent, inViewContent, entryContent] = useInView({ threshold: 0.2 });

  return (
    <div
      className="education-list-item-timeline"
      key={`educ-${props.index}`}
      ref={refCard}
    >
      <div className="education-list-item-timeline-img"
        ref={refCap}
        animation-name="zoom-in"
        animation-duration="500"
        style={Utils.animate(inViewCard, entryCap)
        }
        >
        <AcademicCapIcon className="cap-icon"></AcademicCapIcon>
      </div>
      <div
        ref={refContent}
        animation-name={props.index % 2 ? "fade-right" : "fade-left"}
        animation-duration="1000"
        className="education-list-item-timeline-card"
        style={Utils.animate(inViewCard, entryContent)}
      >
        <div className="education-list-item-timeline-card-year text-s">
          <pre>{props.educationElement.year}</pre>
        </div>
        <div className="education-list-item-timeline-card-content">
          <div className="education-list-item-timeline-card-info">
            <div className="education-list-item-timeline-card-info-element diploma text-m">
              <strong>{props.educationElement.title}</strong>
            </div>
            <div className="education-list-item-timeline-card-info-element school text-s">
              <strong>{props.educationElement.school}</strong>
            </div>
            <div className="education-list-item-timeline-card-info-element grade text-m">
              {props.educationElement.grade}
            </div>
            <div className="education-list-item-timeline-card-info-element description text-s">
              {props.educationElement.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationCardItem;
