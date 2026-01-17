import Icon from "@/components/Icon"
import useWindowResize from "@/hooks/useWindowResize"
import './Folder.css'

function Folder({ dirname, children }) {
  const width = useWindowResize();
  return (
    <>
      <div className="folder">
        <div className="folder__head">
          <Icon name="folder" size={25} />
          <span>{dirname}</span>
        </div>
        {width <= 530 ? "" :
          <div className="folder__info">
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

export default Folder 
