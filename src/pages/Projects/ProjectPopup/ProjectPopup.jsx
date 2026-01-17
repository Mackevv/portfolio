import { useEffect, useRef } from "react"
import Icon from "@/components/Icon"
import "./ProjectPopup.css"

function ProjectPopup({ isOpen, onClose, name, desc, techstack, size, createdAt, link, repo, width }) {
  const popupRef = useRef()

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose()
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null 

  return (
    <div className="project-popup__overlay">
      <div className="project-popup__content" ref={popupRef}>
        <div className="project-popup__header">
          {link != null ? 
            <h2 className="project-popup__header--link-exist"><a href={link} className="link" rel="nofollow noreferrer">{name}</a></h2> :
            <h2>{name}</h2>
          }
          {width <= 530 ? "" :
            <div className="project-file__info">
              <span>{size}</span>
              <span>{createdAt}</span>
            </div>          
          }
        </div> 
        <p>{desc}</p>
        
        <h3>TechStack</h3>
        <div className="project-popup__techstack">
          {techstack.map(tech => (
            <Icon key={tech} name={tech.toLowerCase()} size={40} />
          ))}
        </div>
        {repo != null ?
          <div className="project-popup__github-link">
            <Icon name="github" size={22} /> 
            <a href={repo} className="link" rel="noreferrer nofollow">Check on github</a>
          </div> :
          ""
        }
      </div>
    </div>
  )
}

export default ProjectPopup
