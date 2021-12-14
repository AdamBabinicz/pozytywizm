import React from "react";
import "../styles/Footer.css";
import { HomeSocial } from "./HomeSocial";

function Footer() {
  return (
    <footer>
      <p className="footer_title">2021 - {new Date().getFullYear()}.</p>
      <div className="footerSocial">
        {HomeSocial &&
          HomeSocial.map((social) => (
            <a href={social.iconLink} key={social.id}>
              {social.iconName}
            </a>
          ))}
      </div>
      <p className="copy_right">Radom</p>
    </footer>
  );
}

export { Footer };
