import Icon from "@/components/Icon"
import './ProjectFile.css'

function ProjectFile({ name }) {
  return (
    <div className="project-file">
      <Icon name="file" size={25} />
      <span>{name}.zip</span>
    </div>
  )  
}

export default ProjectFile
