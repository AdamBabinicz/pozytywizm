import React from "react";

function ServiceBox({ imgName, box_name, box_desc, box_link }) {
  return (
    <div className="service_box">
      <img src={imgName} alt="..." />
      <h2>{box_name}</h2>
      <p>{box_desc}</p>
      <a
        href={box_link}
        className="service_button"
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        Więcej
      </a>
    </div>
  );
}

export { ServiceBox };
