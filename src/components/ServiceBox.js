import React from "react";

function ServiceBox({ imgName, box_name, box_desc }) {
  return (
    <div className="service_box">
      <img src={imgName} alt="..." />
      <h2>{box_name}</h2>
      <p>{box_desc}</p>
      <a href="#" className="service_button">
        Więcej
      </a>
    </div>
  );
}

export { ServiceBox };
