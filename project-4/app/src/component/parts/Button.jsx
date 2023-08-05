import React from 'react'
import styled from "styled-components"

const Button = () => {
    const buttonList = ["All", "Breakfast", "Lunch", "Dinner"]
  return (
    buttonList.map((i, index)=>(
        <ButtonType key={index}>{i}</ButtonType>
    ))    
  )
}

export default Button;

const ButtonType = styled.button`
background-color: #FF4343;
color: #FFFFFF;
border-radius: 5px;
border: none;
padding: 6px 12px;
`
