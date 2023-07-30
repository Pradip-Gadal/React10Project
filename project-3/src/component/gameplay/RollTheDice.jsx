import React, { useState } from 'react'
import styled from "styled-components"

const RollTheDice = ({random, rollDice, setScore, rules, setRules}) => {

  // const [showHideRules, setShowHideRules] = useState()

  const choice = (event) => {
    return event ? "Hide Rules" : "Show Rules"
    // if(event){
    //   return "Hide Rules"
    // } else{
    //   return "Show Rules"
    // }
  }

  const btnMsg = ["Reset Score", `${choice(rules)}`]
  const btnClick = [() => {setScore(0)}, 
                    () => {setRules((prev)=>!prev)} ]

  return (
    <Main>
      <DiceRoll>
        <img onClick={rollDice} src={`/images/dice_${random}.png`} alt='logo' />
        <p>Click on Dice to roll</p>
      </DiceRoll>
      <div className='resetRulesBtn'>
          {
            btnClick.map((clik, index)=>{
              return(
                <Button 
                onClick={clik}
                key={index}
                isIt={index==0}>{btnMsg[index]}</Button>
              )
            })
          }
        {/* {
          
          btnMsg.map((msg, index)=>{
            return(
              <Button 
              onClick={btnClick.map((fn) => {
                fn;
              })} 
              key={index}
              isIt={msg=="Reset Score"}>
              {msg}
              </Button>
            )
          })
        } */}
      </div>
    </Main>
  )
}

export default RollTheDice;

const Main = styled.main`
height: 450px;
width: 250px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;

.resetRulesBtn{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 112px;
}
`

const DiceRoll = styled.div`
width: 100%;
text-align: center;

img{
    object-fit: cover;
    cursor: pointer;
}
p{
    font-size: 24px;
    font-weight: 500;
    line-height: 36px;
}
`

const Button = styled.button`
box-sizing: border-box;
letter-spacing: 1px;
font-weight: 600;
font-size: 16px;
width: 100%;
height: 44px;
border: 2px black solid;
border-radius: 5px;
background-color: ${(props)=> !props.isIt ? "black" : "white"};
color: ${(props)=> props.isIt ? "black" : "white"};
cursor: pointer;
&:hover{
  transform: scale(1.05);
  /* background-color: ${(props)=> props.isIt ? "black" : "white"};
  color: ${(props)=> !props.isIt ? "black" : "white"};; */
}
`