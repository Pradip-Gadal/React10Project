import React from 'react'
import styled from "styled-components"
import Button from './parts/Button';
const Navbar = ({searchFood, btnFunction, btnData}) => {
  return (
    <MainContainer>
      <LogoSearch>
        <div>
            <img className="image" src='/public/Foody Zone (1).svg' />
        </div>
        <input onChange={searchFood} type='text' placeholder='Search Food...' />
      </LogoSearch>
      <Buttons>
        <Button btnFunction = {btnFunction}/>
      </Buttons>
    </MainContainer>
  )
}

export default Navbar;

const MainContainer = styled.div`
height: 200px;
width: 100%;
background-color: #323334;
padding: 60px 120px 20px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`
const LogoSearch = styled.div`
width: 100%;
height: 40px;
display: flex;
justify-content: space-between;

  .image{
     cursor: pointer;
      &:hover{
         transform: scale(1.1);
          }
        }

    input{
        box-sizing: border-box;
        height: 40px;
        width: 285px;
        border: 1px #FF4343 solid;
        border-radius: 5px;
        background-color: transparent;
        color: white;
        font-weight: 400;
        padding: 0px 14px;
    }
`

const Buttons = styled.div`
max-height: 31px;
max-width: 325px;
display: flex;
justify-content: space-between;
gap: 14px;
`