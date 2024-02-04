import React from 'react'
import styled from 'styled-components'

function ImageCard({data}) {
  return (
    <>
    <Maincontainer href={data.link}>
        <Imagecontainer  >
            <Image src={data.img}></Image>
        </Imagecontainer>
        <Header>{data.id}</Header>
        <Title>{data.text}</Title>
    </Maincontainer>
    </>
  )
}

export default ImageCard

const Maincontainer=styled.a`
cursor: pointer;
border: 2px solid red;
height: 350px;
width: 200px;
box-shadow: 0px 5px 10px;
padding: 5px;
border-radius: 12px;
overflow: hidden;
`
const Imagecontainer=styled.div`
height: 200px;
width: 100%;
`
const Image=styled.img`
height: 100%;
  aspect-ratio: 1;
  border-radius: 7px;
  filter: drop-shadow(0px 2px 5px gray);
`
const Header=styled.div`
color: brown;
  font-weight: bold;
  display: grid;
  place-items: center;
  text-align: center;
  margin: 10px 0;
  line-height: 15px;
`
const Title=styled.div`
line-height: 20px;
  color: black;
  text-align: justify;
  padding: 0px 5px;
`
