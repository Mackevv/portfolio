import { useState } from "react"
import useWindowResize from "@/hooks/useWindowResize"
import ProjectPopup from "../ProjectPopup/ProjectPopup"
import Icon from "@/components/Icon"
import './ProjectFile.css'

function ProjectFileInfo({ size, createdAt }) {
  return (
    <div className="project-file__info">
      <span>{size}</span>
      <span>{createdAt}</span>
    </div>
  )
}

function ProjectFile({ name, desc, techstack, size, createdAt, link, repo, isOpen, onOpen, onClose }) {
  const width = useWindowResize()

  return (
    <>
      <div className="project-file" onClick={onOpen}>
        <div className="project-file__head">
          <Icon name="file" size={25} />
          <span>{name}.zip</span>
        </div>
        {width <= 530 ? "" :
          <ProjectFileInfo size={size} createdAt={createdAt} />
        }
      </div>
      <ProjectPopup 
        isOpen={isOpen}
        onClose={onClose}
      >
        <div class="project-popup__header">
          {link != null ? 
            <h2 className="project-popup__header--link-exist"><a href={link} className="link" rel="nofollow noreferrer">{name}</a></h2> :
            <h2>{name}</h2>
          }
          {width <= 530 ? "" :
            <ProjectFileInfo size={size} createdAt={createdAt} />
          }
        </div> 
        <p>{desc}</p>
        
        <h3>TechStack</h3>
        <div className="project-popup__techstack">
          {techstack.map(tech => (
            <Icon name={tech.toLowerCase()} size={40} />
          ))}
        </div>
        {repo != null ?
          <div className="project-popup__github-link">
            <Icon name="github" size={22} /> 
            <a href={repo} className="link" rel="noreferrer nofollow">Check on github</a>
          </div> :
          ""
        }
      </ProjectPopup>
    </>
  )  
}

export default ProjectFile
