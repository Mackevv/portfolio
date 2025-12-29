import Icon from "@/components/Icon"
import './ProjectDir.css'

function ProjectDir({ dirname, children }) {
  return (
    <>
      <div className="project-dir">
        <Icon name="folder" size={25} />
        <span>{dirname}</span>
      </div>
      <div className="files">
        {children}
      </div>
    </>
  )
}

export default ProjectDir
