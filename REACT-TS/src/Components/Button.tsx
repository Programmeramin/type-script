import React from "react";
import { ButtonProps } from "../types/Types"

const Button = ({title, style}: ButtonProps) => {

  const  handleClick = (

    event: React.MouseEvent<HTMLButtonElement>,
    amount : number

  ) =>{
    alert(amount);
  }

  return (
    <>
      <button style={style} onClick={(event) => handleClick(event, 300)}>{title}</button>
    </>
  )
}   

export default Button
