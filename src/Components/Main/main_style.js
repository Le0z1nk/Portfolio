import styled from 'styled-components'

export const Main = styled.main `
display: flex;
justify-content: space-evenly;
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
}
@media (min-width: 501px) and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
}
`
export const ImagemPrincipal = styled.div `

`
export const ImgFoto = styled.img `
width: 23vw;
height: 75vh;
border-radius: 10px;
margin-top: 3rem;
@media (min-width: 201px) and (max-width: 500px) {
    width: 90vw;
    height:  55vh;
}
@media (min-width: 501px) and (max-width: 900px) {
    width: 75vw;
    height:  55vh;
}
`

export const CaixaSobre = styled.div `
margin-top: 6rem;
@media (min-width: 201px) and (max-width: 500px) {
    position: relative;
    bottom: 5rem;
}
@media (min-width: 501px) and (max-width: 900px) {
    position: relative;
    bottom: 5rem;
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
@media (min-width: 501px) and (max-width: 900px) {
   padding-right: 7rem;
   text-align: center;
    font-size: 3.5rem;
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
@media (min-width: 501px) and (max-width: 900px) {
    font-size: 2.5rem;
    width: 90vw;
}
`
export const CaixaHab = styled.div `
margin-top: 3rem;
width: 33.5vw;
@media (min-width: 201px) and (max-width: 500px) {
    width: 100vw;
    position: relative;
    bottom: 1rem;
}
@media (min-width: 501px) and (max-width: 900px) {
    width: 60vw;
    margin-top: 5rem;
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
@media (min-width: 501px) and (max-width: 900px) {
    position: relative;
    right: 1rem;
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
@media (min-width: 501px) and (max-width: 900px) {
    position: relative;
    right: 1rem;
    img {
        width: 120px;
    }
    figcaption {
        font-size: 18px;
    }
}
`
export const NomeHab1 = styled.figcaption `
padding-left: 1.5rem;
@media (min-width: 501px) and (max-width: 900px) {
    padding-left: 1.7rem;
}
`
export const NomeHab2 = styled.figcaption `
padding-left: 1.8rem;
@media (min-width: 501px) and (max-width: 900px) {
    padding-left: 2.3rem;
}
`
export const NomeHab3 = styled.figcaption `
padding-left: 2rem;
@media (min-width: 501px) and (max-width: 900px) {
    padding-left: 3rem;
}
`
export const NomeHab4 = styled.figcaption `
padding-left: 1.7rem;
@media (min-width: 501px) and (max-width: 900px) {
    padding-left: 2.7rem;
}
`
export const NomeHab5 = styled.figcaption `
padding-left: 0.6rem;
`
export const NomeHab6 = styled.figcaption `
padding-left: 1.7rem;
@media (min-width: 501px) and (max-width: 900px) {
   padding-left: 1.9rem;
}
`