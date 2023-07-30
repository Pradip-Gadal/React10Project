import React from 'react'
import styled from "styled-components"

const StartGame = (props) => {
  return (
    <Container>
        <img src='/images/dices.png' alt='diceLogo' />
        <div className='playNowBtn'>
            <h1>Dice Game</h1>
            <Button onClick={props.click}>Play Now</Button>
        </div>

    </Container>
  )
}

export default StartGame;

const Container = styled.div`
height: 100vh;
max-width: 100vh;
margin: 0px auto;
display: flex;
gap: 2%;
align-items: center;
justify-content: center;

.playNowBtn{
    h1{
        font-size: 96px;
        line-height: 144px;
        font-weight: 700;
        white-space: nowrap;
    }
}
`
const Button = styled.button`
width: 220px;
font-size: 16px;
font-weight: 600;
border: 2px transparent solid;
border-radius: 5px;
height: 45px;
padding: 10px 18px;
color: white;
background-color: black;
letter-spacing: 0.8px;
transition: 0.5s ease-in-out;

&:hover{
    background-color: transparent;
    border: 4px black solid;
    color: black;
    cursor: pointer;   
}
`

