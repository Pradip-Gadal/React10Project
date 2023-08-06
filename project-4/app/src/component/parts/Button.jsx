import React from 'react'
import styled from "styled-components"

const Button = ({btnFunction, btnData}) => {
    const buttonList = ["All", "Breakfast", "Lunch", "Dinner"]

    return (
    buttonList.map((i, index)=>(
        <ButtonType 
        isSelected = {btnData == i}
        onClick={() => btnFunction(i)} 
        key={index}>{i}
        </ButtonType>
    ))    
  )
}

export default Button;

const ButtonType = styled.button`
background-color: ${({isSelected}) => isSelected? red: "#FF4343"} ;
color: #FFFFFF;
border-radius: 5px;
border: none;
padding: 6px 12px;
cursor: pointer;
&:hover{
  transform: scale(1.2);
  background-color: red;
}
`
