import { useEffect, useRef } from "react"
import "./ProjectPopup.css"

function ProjectPopup({ isOpen, onClose, children }) {
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
        {children}
      </div>
    </div>
  )
}

export default ProjectPopup
