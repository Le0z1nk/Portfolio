import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'

export const ContainerProjetos = styled.section `
background-color: rgb(9, 11, 23); 
color: white;
display: flex;
flex-direction: column;
align-items: center;
height: 84.5vh;
h1 {
    font-size: 6rem;
    font-family: 'Raleway', sans-serif;
}
`


export default function Projetos() {
var settings = {
    dots: true,
    easing: true,
    centerMode: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
}

    return(
        <ContainerProjetos>
        <h1> PROJETOS</h1> 
        <Slider {...settings}>
            <div>
                <h3>1</h3>
            </div>
            <div>
                <h3>2</h3>
            </div>
        </Slider>
        </ContainerProjetos> 
    )
}