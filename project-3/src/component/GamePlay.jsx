import {useState} from 'react'
import styled from "styled-components"
import ScoreBoad from './gameplay/ScoreBoad';
import NumberSelector from './gameplay/NumberSelector';
import RollTheDice from './gameplay/RollTheDice';
import Rules from './gameplay/Rules';

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectValue , setSelectValue] = useState();
  const [random, setRandom] = useState(1);
  const [err, setErr] = useState("");
  const [rules, setRules] = useState()

  const getRndInt = (min, max) => {
      return Math.floor(Math.random() * (max - min) ) + min;
  }

  const rollDice = () =>{
    if(!selectValue){
      setErr("You have not selected any number")
      return;
    }
      
    const random = getRndInt(1,7)
      setRandom((prev)=> random)
      console.log(random);

      if(selectValue==random){
        setScore((score)=>score+selectValue*3)
      } else{
        setScore((score) =>score-random)
      }
      
      setSelectValue(undefined)
  }
  
  return (
    <Main>
      <TopPart>
        <ScoreBoad 
          score={score}
        />
        <NumberSelector
            selectValue={selectValue}
            setSelectValue={setSelectValue}
            err={err} 
            setErr={setErr}
        />
      </TopPart>
      <RollTheDice 
            random={random}
            rollDice={rollDice}
            setScore={setScore} 
            rules={rules}
            setRules={setRules}
            />
      <div>
         {rules && <Rules /> }
      </div>
       
    </Main> 
  )
}

export default GamePlay;

const Main = styled.main`
height: 80vh;
width: 80%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
margin: 0px auto;
margin-top: 4%;
`

const TopPart = styled.div`
height: 151px;
width: 80%;
display: flex;
text-align: center;
align-items: center;
justify-content: space-between;
`
