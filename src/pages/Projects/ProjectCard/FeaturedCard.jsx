import React from 'react';
import "./FeaturedCard.css";
import Icon from "components/Icon";

function FeaturedCard({ title, description, image, imageAlt, link, tags }) {
  return (
    <div className="featured-card">
      <div className="featured-card__image">
        <div className="featured-card__image-wrapper">
          <a href={link} rel="noreferrer" className="link" target="_blank">
            <img src={image} alt={imageAlt}/>
          </a>
        </div>
        <div className="glowing-square"></div>
      </div>
      <div className="featured-card__content">
        <p>Pinned Project</p>
        <div className="featured-card__title">{title}</div>
        <div className="featured-card__description">{description}</div>
        <div className="featured-card__tags">
          {tags.map(tag => (
            <div key={tag}>{tag}</div>
          ))}
        </div>
        <div className="glass glass-top">
          <a href={link} className="link" rel="noreferrer" target="_blank">
            <Icon name="github" size={45}/>
          </a>
        </div>
        <div className="glass glass-right"></div>
        <div className="glass glass-bottom"></div>
      </div>
    </div>
  );
}

export default FeaturedCard;