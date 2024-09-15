import { useState } from 'react'
import Card from './compoents/Card'


function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Ajit Rai",
    age: 23
  }

  let newArr = [1,2,3,4]

  return (
    <>

      <h1 className=' text-white text-center text-3xl'>Hello Ajit Rai</h1>

      <div className='flex justify-center mt-8 gap-8'>
        <Card username="Ajit Rai" intro="Hello I'm Ajit Rai I'am Computer engineeing student" source="https://scontent-del1-2.xx.fbcdn.net/v/t39.30808-6/313432215_1770670639982388_7443821598308048799_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=hWtbVFBfUX0Q7kNvgGaehcQ&_nc_ht=scontent-del1-2.xx&_nc_gid=ATLR7vV06gd91H0PZcJFtAS&oh=00_AYBawRt7vk4jFwRs-ehDKVTn0TVoVeVdi-9GPkzHQcaqxA&oe=66ED0153"/>
        <Card username="chaiaurcode" intro="Hello This side chai or haa chai to chlti rhe gii" source="https://cdn.pixabay.com/photo/2024/01/12/02/12/ai-generated-8503018_640.jpg" sumObj={myObj} myArr={newArr} />

      </div>

    </>
  )
}

export default App
