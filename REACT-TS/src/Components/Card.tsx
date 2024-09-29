import React from "react"
import { CardProps } from "../types/Types"

const Card = ({children} : CardProps) : JSX.Element | React.ReactElement => {
  return (
    <>
      
      <div className="card">
        {children}
      </div>

    </>
  )
}

export default Card
