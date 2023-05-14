import styled from 'styled-components'
import Fundo from "../Main/fundotec.jpg"

export const Main = styled.main `
display: flex;
justify-content: space-evenly;
background-image: url(${Fundo});
background-position: center;
background-size: 100% 100%;
background-color: rgb(9, 11, 23);
div {
    color: white;
}
a {
    color: white;
}
@media (min-width: 201px) and (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    background-repeat: no-repeat;
}
`
export const ImagemPrincipal = styled.div `

`
export const ImgFoto = styled.img `
width: 23vw;
height: 70vh;
border-radius: 5px;
margin-top: 3rem;
@media (min-width: 201px) and (max-width: 500px) {
    width: 95vw;
    height:  50vh;
}
`
export const Copyright = styled.p `
margin-top: 2rem;
@media (min-width: 201px) and (max-width: 500px) {
    position: relative;
    top: 35.5rem;
    left: 0.6rem;
}
`
export const CaixaSobre = styled.div `
margin-top: 6rem;
@media (min-width: 201px) and (max-width: 500px) {
    position: relative;
    bottom: 6rem;
}
`
export const Titulo1 = styled.h1 `
font-size: 3rem;
padding-left: 7rem;
color: white;
font-family: 'Raleway', sans-serif;
@media (min-width: 201px) and (max-width: 500px) {
    position: relative;
    right: 3rem;
}
`
export const Paragrafo = styled.p `
font-size: 1.5rem;
margin-top: 1rem;
width: 37vw;
height: 6vh;
color: white;
font-family: 'Raleway', sans-serif;
@media (min-width: 201px) and (max-width: 500px) {
    width: 99vw;
}
`
export const CaixaHab = styled.div `
margin-top: 3rem;
width: 33.5vw;
@media (min-width: 201px) and (max-width: 500px) {
    width: 100vw;
    position: relative;
    bottom: 2rem;
}
`
export const TituloHab = styled.h1 `
font-size: 5rem;
color: white;
font-family: 'Raleway', sans-serif;
@media (min-width: 201px) and (max-width: 500px) {
    font-size: 3.5rem;
    padding-left: 3rem;
}
`
export const Caixaimghab = styled.div `
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
img {
    width: 92px;
    height: 79px;
    margin-top: 1rem;
}
figcaption {
    font-size: 12px;
    width: 6.7vw;
    color: white;
}
@media (min-width: 201px) and (max-width: 500px) {
    img {
        width:84px;
    }
}
`
export const NomeHab1 = styled.figcaption `
padding-left: 1.5rem;
`
export const NomeHab2 = styled.figcaption `
padding-left: 1.8rem;
`
export const NomeHab3 = styled.figcaption `
padding-left: 2rem;
`
export const NomeHab4 = styled.figcaption `
padding-left: 1.7rem;
`
export const NomeHab5 = styled.figcaption `
padding-left: 0.6rem;
`
export const NomeHab6 = styled.figcaption `
padding-left: 1.7rem;
`