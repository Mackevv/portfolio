import React from 'react';
import HTMLTag from "../HTMLTag/HTMLTag";
import Icon from "../Icon";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <HTMLTag name="footer">
        <div className="footer-email">
          <a href="mailto: mn.kevin31@gmail.com">
            <Icon name="share" size={18} /> mn.kevin31@gmail.com
          </a>
        </div>
        <div className="footer-legal">
          2022 &copy; Website designed and built by Kevin Macé
        </div>
        <div className="footer-social-media">
          <a href="https://twitter.com/mackevvv" target="_blank" rel="noreferrer">
            <Icon name="twitter" size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <Icon name="instagram" size={20} />
          </a>
          <a href="https://github.com/Mackevv" target="_blank" rel="noreferrer">
            <Icon name="github" size={20} />
          </a>
        </div>
      </HTMLTag>
    </footer>
  );
}

export default Footer;