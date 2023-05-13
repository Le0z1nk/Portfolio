import React from 'react'
import styled from 'styled-components'
import Carousel from 'react-elastic-carousel'
import Pepsi from "./imagens/pepsi.png"

export const ContainerProjetos = styled.section `
background-color: rgb(9, 11, 23); 
color: white;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
h1 {
    font-size: 6rem;
    font-family: 'Raleway', sans-serif;
}
`
export const ProjectContainer = styled.section `
display: flex;
flex-direction: column;
align-items: center;
`
export const ImgProject = styled.img `
width: 57.2vw;
border-radius: 10px;
`
export const Descricao = styled.p `
font-size: 1.5rem;
`


export default function Projetos() {


    return(
        <ContainerProjetos>
        <h1> PROJETOS</h1> 
        <Carousel itemsToShow={1}>
        <ProjectContainer>
         <a href="https://4qvo4e.csb.app/"><ImgProject src={Pepsi} alt="pepsi page" /></a>
         <Descricao>Pagina inicial da pepsi. Foi usado HTML5, CSS3, Javascript, React e Styled-components</Descricao>
         </ProjectContainer>
         <p>2</p>
        </Carousel>
        </ContainerProjetos>      
    )
}