import React from "react";
import "../styles/Projects.css";
import { ProjectsImages } from "./ProjectsImages";

function Projects() {
  return (
    <section className="projects section" id="twórcy">
      <div className="circle projects_circleOne"></div>
      <div className="circle projects_circleThree"></div>
      <h2 className="section_title">Twórcy w Polsce</h2>
      <div className="projectsContainer bd_grid">
        {ProjectsImages &&
          ProjectsImages.map((image) => (
            <div className="projectImg" key={image.id}>
              <a
                href={image.linkTo}
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <img src={image.imgSrc} alt="..." />
              </a>
              <h3>{image.title}</h3>
            </div>
          ))}
      </div>
    </section>
  );
}

export { Projects };
