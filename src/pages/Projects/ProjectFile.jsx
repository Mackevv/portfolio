import { useState } from "react"
import useWindowResize from "@/hooks/useWindowResize"
import File from "@/components/FileTree/File"
import ProjectPopup from "./ProjectPopup/ProjectPopup"
import Icon from "@/components/Icon"

function ProjectFile({ name, desc, techstack, size, createdAt, link, repo, isOpen, onOpen, onClose }) {
  const width = useWindowResize()

  return (
    <>
      <div onClick={onOpen}>
        <File name={name} size={size} createdAt={createdAt} />
      </div>
      <ProjectPopup 
        isOpen={isOpen} 
        onClose={onClose} 
        name={name} 
        desc={desc} 
        techstack={techstack} 
        size={size} 
        createdAt={createdAt} 
        link={link} 
        repo={repo} 
        width={width}
      />
    </>
  )  
}

export default ProjectFile
