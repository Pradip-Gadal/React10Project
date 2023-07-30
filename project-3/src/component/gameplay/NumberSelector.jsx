import React, { useState } from 'react'
import styled from "styled-components"

const NumberSelector = ({selectValue, setSelectValue, err, setErr}) => {

    const numArr = [1,2,3,4,5,6]
    const errHandler = (i) => {
        setSelectValue(i)
        setErr("")
    }
  return (
    <Container>
        <per className="errMsg">{err}</per>
        <NumSelectBOx>
            { numArr.map((value)=>{
                    return(
                        <Numbers 
                        onClick={()=> errHandler(value)}
                        key={value}
                        isSelected={value==selectValue}>
                        {value}</Numbers> )
                })
            }
        </NumSelectBOx>
        <p>Select Number</p>
    </Container>
  )
}

export default NumberSelector;

const Container = styled.div`
max-height: 140px;
max-width: 552px;
display: flex;
flex-direction: column;
justify-content: space-between;
text-align: end;
gap: 20px;

.errMsg{
    font-size: 24px;
    color: red;
    position: relative;
    margin-bottom: -30px;
    bottom: 25px;
    height:20px;
}

p{
    font-weight: 700;
    font-size: 24px;
}
`

const NumSelectBOx = styled.div`
display: flex;
justify-content: space-between;
width: 552px;
`

const Numbers = styled.div`
height: 72px;
width: 72px;
box-sizing: border-box;
border: 1px black solid;
font-size: 24px;
font-weight: 700;
display: flex;
justify-content: center;
align-items: center;
background: ${(props) => props.isSelected ? "black" : "white"};
color: ${(props) => !props.isSelected ? "black" : "white"}
`