import Icon from "@/components/Icon"
import useWindowResize from "@/hooks/useWindowResize"
import './ProjectDir.css'

function ProjectDir({ dirname, children }) {
  const width = useWindowResize();
  return (
    <>
      <div className="project-dir">
        <div className="project-dir__head">
          <Icon name="folder" size={25} />
          <span>{dirname}</span>
        </div>
        {width <= 530 ? "" :
          <div className="project-dir__info">
            <span>size</span>
            <span>created-at</span>
          </div>
        }
      </div>
      <div className="files">
        {children}
      </div>
    </>
  )
}

export default ProjectDir
