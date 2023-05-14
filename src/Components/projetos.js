import React from 'react'
import styled from 'styled-components'
import Carousel from 'react-elastic-carousel'
import Pepsi from "./imagens/pepsi.png"
import Portflow from "./imagens/portflow.png"

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
@media (min-width: 201px) and (max-width: 500px) {
    justify-content: center;
    gap: 7rem;
    height: 87vh;
    h1 {
        font-size: 4.5rem;
    }
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
@media (min-width: 201px) and (max-width: 500px) {
    width: 69vw;
}
`
export const Descricao = styled.p `
font-size: 1.5rem;
@media (min-width: 201px) and (max-width: 500px) {
    font-size: 1rem;
}
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
         <ProjectContainer>
         <a href="https://portflow-kwexu9fek-le0z1nk.vercel.app/"><ImgProject src={Portflow} alt="portflow" /></a>
         <Descricao>Site Portflow. Foi usado HTML5 e CSS3</Descricao>
         </ProjectContainer>
        </Carousel>
        </ContainerProjetos>      
    )
}