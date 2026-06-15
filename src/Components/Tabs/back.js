import React from 'react'
import styled from 'styled-components'
import WebScrapingMaven from "../imagens/WebScraping_SQL.png"

export const SectionProjetos = styled.section`
width: 95vw;
height: 80vh;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-wrap: wrap;
`

export const ProjectContainer = styled.section`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
background-color: white;
border-radius: 10px;
width: 21vw;
height: 35vh;
@media (min-width: 201px) and (max-width: 500px) {
 width: 75vw;   
}
`
export const DivImg = styled.div`
display:flex;
`
export const ImgProject = styled.img`
width: 20vw;
height: 20vh;
border-radius: 10px;
@media (min-width: 201px) and (max-width: 500px) {
    width: 69vw;
}
`
export const DivImgHover = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
width: 20vw;
height: 20vh;
opacity: 0;
position: absolute;
margin: 0;
padding: 0;
border-radius: 10px;
background-color: #00000064;
transition: 0.2s;
:hover {
opacity: 1;
transition: 0.2s;
}
@media (min-width: 201px) and (max-width: 500px) {
 width: 68vw;  
}
`
export const DivSvg = styled.div `
background-color: #ffffffbf;
border-radius: 50px;
display: flex;
justify-content: center;
align-items: center;
width: 17%;
height: 37%;
@media (min-width: 201px) and (max-width: 500px) {
 width: 20%;
}
`
export const Titulo = styled.p`
font-weight: bold;
font-size: 1.2rem;
color: black;
`
export const Descricao = styled.p`
opacity: 0.7;
font-size: 1rem;
@media (min-width: 201px) and (max-width: 500px) {
    font-size: 1rem;
}
color: black;
text-align: center;
`

export default function tabsBack() {
    return (
        <SectionProjetos>
            <ProjectContainer>
                <DivImg>
                    <ImgProject src={WebScrapingMaven} alt="web scraping" />
                    <DivImgHover>
                        <DivSvg>
                        <a href="https://github.com/Le0z1nk/teste-estagio" target="_blank" rel="noreferrer"><svg width="40px" height="40px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <rect width="24" height="24" fill="none" />
                            <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z" />
                        </svg></a>
                        </DivSvg>
                    </DivImgHover>
                </DivImg>
                <Titulo>Web Scraping</Titulo>
                <Descricao>Projeto de Web Scraping, foi usado Java com Maven e JSoup</Descricao>
            </ProjectContainer>
        </SectionProjetos>
    )
}