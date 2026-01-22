import React from 'react'
import styled from 'styled-components'
import Carousel from 'react-carousel-elasticss'
import Pepsi from "./imagens/pepsi.png"
import Portflow from "./imagens/portflow.png"
import Witcher from "./imagens/whitcher.png"
import ToDoList from "./imagens/todolist.png"
import DellMovies from "./imagens/DellMovies.png"
import DoceLar from "./imagens/docelar.png"

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
    gap: 7rem;
    h1 {
        margin-top: 1rem;
        font-size: 4.5rem;
    }
}
@media (min-width: 501px) and (max-width: 900px) {
    margin-top: 1rem;
    gap: 10rem;
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
         <a href="https://portflow-kwexu9fek-le0z1nk.vercel.app/" target="_blank" rel="noreferrer"><ImgProject src={Portflow} alt="portflow" /></a>
         <Descricao>Site Portflow. Foi usado HTML5 e CSS3</Descricao>
         </ProjectContainer>
         <ProjectContainer>
         <a href="https://the-witcher-zeta.vercel.app/" target="_blank" rel="noreferrer"><ImgProject src={Witcher} alt="thewitcher" /></a>
         <Descricao>Página inicial do jogo The Witcher 3. Foi usado HTML5 e CSS3</Descricao>
         </ProjectContainer>
         <ProjectContainer>
         <a href="https://ugjcpj.csb.app/" target="_blank" rel="noreferrer"><ImgProject src={ToDoList} alt="to do list" /></a>
         <Descricao>Lista de tarefas. Foi usado HTML5, CSS3, Javascript e React </Descricao>
         </ProjectContainer>
         <ProjectContainer>
         <a href="https://4qvo4e.csb.app/" target="_blank" rel="noreferrer"><ImgProject src={Pepsi} alt="pepsi page" /></a>
         <Descricao>Pagina inicial da pepsi. Foi usado HTML5, Javascript, React e Styled-components</Descricao>
         </ProjectContainer>
         <ProjectContainer>
         <a href="https://dell-movies-topaz.vercel.app/" target="_blank" rel="noreferrer"><ImgProject src={DellMovies} alt="dell movies" /></a>
         <Descricao>Site de filmes e séries Dell Movies, no qual foi usado APIs de filmes e séries para criá-lo. Além disso foi usado HTML5, Javascript, React e Styled-components</Descricao>
         </ProjectContainer>
         <ProjectContainer>
         <a href="https://dlhp9v.csb.app/" target="_blank" rel="noreferrer"><ImgProject src={DoceLar} alt="doce lar" /></a>
         <Descricao>Site de uma loja de doces Doce Lar. Foi usado HTML5, Javascript, React e Styled-components</Descricao>
         </ProjectContainer>
        </Carousel>
        </ContainerProjetos>      
    )
}