import React from 'react'
import styled from "styled-components"

const ScoreBoad = ({score}) => {
  return (
    <ScoreDiv>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreDiv>
  )
}

export default ScoreBoad;

const ScoreDiv = styled.div`
height: 150px;
width: 135px;
line-height: 50px;
text-align: center;
display: flex;
gap: 10px;
flex-direction: column;
justify-content: end;

h1{
    text-align: center;
    font-size: 100px;
    font-weight: 500;
}

p{
    font-size: 24px;
    font-weight: 500;
}
`