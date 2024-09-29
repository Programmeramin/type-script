import { TeamProps } from "../types/Types"
import Button from "./Button"

const Team = 
({name, age, skill, isMarried}: TeamProps) => {
  return (
    <>
      
      <h1>{name}</h1>
       <p>{age}</p>
       <p>{skill}</p>
       <span>{isMarried}</span>
       <Button title="Apply now" style={{padding : "10px", backgroundColor : "red", border : "none"}}/>
    </>
  )
}

export default Team
