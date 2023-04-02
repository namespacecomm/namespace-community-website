import React from 'react'
import styled from "styled-components";

const Square = styled.div`
width:60px;
height:60px;
background-color:#4e6bff;
opacity:0.7;
position:absolute;
${'' /* top:-60px; */}
left:-60px; 
z-index: 1;
animation: square 20s linear alternate infinite;

@keyframes square {
    to{
        transform:translate(60vw,90vh);
    }
}
`

const Circle = styled.div`
width:100px;
height:100px;
background-color:#ff97af;
position:absolute;
border-radius:50%;
${'' /* top:200px; */}
left:-100px; 
z-index: 1;
animation: circle 20s linear alternate infinite;

@keyframes circle {
    to{
        transform:translate(50vw,-50vh);
    }
}
`
const Rect = styled.div`
   width: 80px;
      height: 80px;
      border-radius: 50%;
      box-shadow: 15px 15px 0 0 blueviolet;
  
  opacity: 0.5;
  position: absolute;
  ${'' /* top: 400px; */}
  ${'' /* left: -50px; */}
  z-index: 1;
  animation: rect 25s linear alternate infinite;
  @keyframes rect {
    to {
      transform: translate(65vw, 100vh);
    }
  }
`;

const AnimatedShapes = () => {
  return (
    <>
    <Square />
    <Circle />
    <Rect />
    </>
  )
}

export default AnimatedShapes;