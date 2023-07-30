import { useState } from 'react';
import './App.css'
import GamePlay from './component/GamePlay';
import StartGame from './component/StartGame';


function App() {

  const [playNow, setPlayNow] = useState(false)

  const clickGamePlay = () => {
    setPlayNow((prev)=> !prev)
  }

  return (
    <>
    {
      playNow ? <GamePlay /> : <StartGame click={clickGamePlay}/>
    }
     
    </>
  )
}

export default App;
