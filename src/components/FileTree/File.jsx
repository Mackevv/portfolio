import { useState } from "react"
import useWindowResize from "@/hooks/useWindowResize"
import Icon from "@/components/Icon"
import './File.css'

function File({ name, size, createdAt }) {
  const width = useWindowResize()

  return (
    <div className="file">
      <div className="file__head">
        <Icon name="file" size={25} />
        <span>{name}.zip</span>
      </div>
      {width <= 530 ? "" :
        <div className="file__info">
          <span>{size}</span>
          <span>{createdAt}</span>
        </div>
      }
    </div>
  )  
}

export default File
