import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { education } from "../../data";
import './Education.css'
export default function Education() {
    return (
        <section id="education">
            <div className="section-container">
                <h1 className="section-title">
                    Education
                </h1>
                <div className="education-list">
                    {education.map((educationElement: { school: string, year: string, title: string, grade: string, description: string }) => (
                        <div className="education-list-item ">
                            <div className="education-center "><strong>{educationElement.school}</strong>{educationElement.year}</div>
                            <div className="education-description ">
                                <div className="education-description-element diploma "><strong>{educationElement.title}</strong></div>
                                <div className="education-description-element grade ">Grade: {educationElement.grade}</div>
                                <div className="education-description-element descrition ">{educationElement.description}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}