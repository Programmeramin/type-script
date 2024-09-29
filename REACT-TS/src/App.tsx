import { useState } from 'react'
import './App.css'
import Button from './Components/Button'
import Card from './Components/Card'
import Team from './Components/Team'

function App() {

const [input, setInput] = useState<(string | number)[]>(["hello"]);

setInput([6])
 
  return (
    <>
      <h1>HELLO TYPESCRIPT {input}</h1>

      <Team name={"amiin islan"} age={34} skill={"ios devs"} isMarried={true}/>

     <Card>
       <h1>Hello Bangladesh</h1>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolore repudiandae doloremque aliquam cum cupiditate amet fugiat perferendis ipsum magni.</p>

        <Button title='Apply Now'/>

     </Card>

   

    </>
  )      
}

export default App
