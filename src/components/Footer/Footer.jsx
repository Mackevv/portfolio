import React from 'react';
import HTMLTag from "components/HTMLTag/HTMLTag";
import Icon from "components/Icon";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <HTMLTag name="footer">
        <div className="footer-email">
          <a href="#contact" className="link">
            <Icon name="share" size={18} /> By email
          </a>
        </div>
        <div className="footer-legal">
          2022 &copy; Website designed and built by Kevin Macé
        </div>
        <div className="footer-social-media">
          <a href="https://twitter.com/mackevvv" className="link" target="_blank" rel="noreferrer">
            <Icon name="twitter" size={20} />
          </a>
          <a href="https://instagram.com" className="link" target="_blank" rel="noreferrer">
            <Icon name="instagram" size={20} />
          </a>
          <a href="https://github.com/Mackevv" className="link" target="_blank" rel="noreferrer">
            <Icon name="github" size={20} />
          </a>
        </div>
      </HTMLTag>
    </footer>
  );
}

export default Footer;