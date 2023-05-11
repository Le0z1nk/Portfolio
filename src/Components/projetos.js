import React from 'react'
import styled from 'styled-components'
import Carousel from 'react-elastic-carousel'

export const ContainerProjetos = styled.section `
background-color: rgb(9, 11, 23); 
color: white;
display: flex;
flex-direction: column;
align-items: center;
h1 {
    font-size: 6rem;
    font-family: 'Raleway', sans-serif;
}
`


export default function Projetos() {


    return(
        <ContainerProjetos>
        <h1> PROJETOS</h1> 
        <Carousel itemsToShow={1}>
        <div>
         <p>1</p>
         <p>É isoo aiii</p>
         </div>
         <p>2</p>
        </Carousel>
        </ContainerProjetos>      
    )
}