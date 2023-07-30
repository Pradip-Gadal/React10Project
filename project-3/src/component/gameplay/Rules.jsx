import React from 'react'
import styled from "styled-components"

const Rules = () => {
  return (
    <Container>
      <p>How to play dice game</p>
      <ul>
        <li>Select any number</li>
        <li>Click on dice image</li>
        <li>after click on dice if selected number is equal to dice number you will get same point as dice</li>
        <li>if you get wrong guess then 2 point will be dedcuted</li>
      </ul>
    </Container>
  )
}

export default Rules;

const Container = styled.div`
    height: 210px;
    width: 800px;
    background-color: #FBF1F1;
    display: flex;
    flex-direction: column;

    p{
        padding: 1rem 0rem 1rem 1.5rem;
        font-size: 24px;
        font-weight: 700;
    }

    ul{
        font-size: 18px;
        font-weight: 500;
        line-height: 25px;
    }
`