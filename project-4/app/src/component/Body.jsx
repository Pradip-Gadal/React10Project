import React from 'react'
import styled from "styled-components"
import { BASE_URL } from '../App'

const Body = ({data}) => {
  return (
    <BodySection>
      <FoodContainers>
        {
          data?.map((food) =>(
            <FoodContainer key={food.name}>
              <FoodImage>
                <img src={BASE_URL + food.image} />
              </FoodImage>
              <FoodDescription>
                <div className='text'>
                  <p className='title'>{food.name}</p>
                  <p className='description'>{food.text}</p>
                </div>
                <div className='button'>
                  <button>${food.price.toFixed(2)}</button>
                </div>
              </FoodDescription>

            </FoodContainer>
          ))
        }
      </FoodContainers>
      
    </BodySection>
  )
}

export default Body;

const BodySection = styled.section`
min-height: 70vh;
min-width: 100%;
background: url("/baground.jpeg");
background-size: 170% auto;
`

const FoodContainers = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 32px;
padding-top: 60px;

`
const FoodContainer = styled.div`
max-width: 340px;
max-height: 165px;
display: flex;
border-radius: 15px;
cursor: pointer;

background: url("/public/Rectangle 1.png"), lightgray 0% 0% / 50.8334219455719px 50.8334219455719px repeat, radial-gradient(151.92% 127.02% at 15.32% 21.04%, rgba(165, 239, 255, 0.20) 0%, rgba(110, 191, 244, 0.04) 77.08%, rgba(70, 144, 212, 0.00) 100%);
background-blend-mode: overlay, normal;
backdrop-filter: blur(13.184196472167969px);

&:hover{
  transform: scale(1.05);
}
`
const FoodImage = styled.div`
`

const FoodDescription = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
color: #FFFFFF;

.text{
  display: flex;
  width: 168px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
}

.title{
  font-weight: 600;
}
.description{
  font-weight: 400;
  font-size: 12px;
}
.button{
  width: 90%;
  display: flex;
  justify-content: flex-end;
}
button{
  font-size: 12px;
  font-weight: 400;
  color: #FFFFFF;
  background-color: #FF4343;
  border: none;
  border-radius: 5px;
  max-width: 50px;
  height: 25px;
  padding: 4px 6px;
}
`