import styled from 'styled-components'

export const Main = styled.main `
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
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
export const SectionSobre = styled.section `
width: 100%;
display: flex;
justify-content: space-around;
align-items: center;
margin-top: 2rem;
margin-bottom: 1rem;
@media (min-width: 201px) and (max-width: 500px) {
    flex-direction: column;
}
`
export const ImgFoto = styled.img `
width: 35vw;
height: 80vh;
border-radius: 5px;
@media (min-width: 201px) and (max-width: 500px) {
    width: 90vw;
    height:  55vh;
}
@media (min-width: 501px) and (max-width: 900px) {
    width: 75vw;
    height:  55vh;
}
`
export const Paragrafo = styled.p `
font-size: 3.5rem;
width: 50vw;
color: white;
font-weight: bold;
/* border: solid #fff; */
font-family: 'Raleway', sans-serif;
@media (min-width: 201px) and (max-width: 500px) {
    width: 100vw;
    font-size: 2.5rem;
}
@media (min-width: 501px) and (max-width: 900px) {
    font-size: 2.5rem;
    width: 90vw;
}
`
export const DivResumo = styled.div `
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
height: 50vh;
div:nth-child(1) {
:first-child {
    font-size: 2rem;

}
}
div:nth-child(2) {
display: flex;
justify-content: space-evenly;
width: 60%;
height: 15%;
margin-right: 8rem;
gap: 10px;
}
a {
    width: 100%;
    text-align: center;
}
button {
    font-size: 2rem;
    color: white;
    background: transparent;
    border: none;
    cursor: pointer;
    background-color: #2A2D3E;
    border-radius: 5px;
    transition: 0.2s;
    width: 95%;
    height: 100%;
}
button:hover {
    background-color: #373b51;
    transition: 0.2s;
}
@media (min-width: 201px) and (max-width: 500px) {
div:nth-child(1) {
:first-child {
    font-size: 1.8rem;

}
}
button {
    font-size: 1.8rem;
    width: 100%;
}
}
`
export const SectionHab = styled.section `
background-color: rgb(15, 18, 39);
width: 100%;
display: flex;
justify-content: space-around;
gap: 50px;
padding-top: 2rem;
@media (min-width: 201px) and (max-width: 500px) {
    flex-direction: column;
}
`
export const DivSobreMim = styled.div `
width: 40%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
height: 60vh;
p {
    font-size: 1.5rem;
}
@media (min-width: 201px) and (max-width: 500px) {
    width: 100%;
    p  {
        font-size: 1.3rem;
        text-align: center;
    }
}
`
export const DivTituloHab = styled.div `
width: 100%;
background-color: rgb(15, 18, 39);
`
export const TituloHab = styled.h1 `
font-size: 3rem;
color: white;
font-family: 'Raleway', sans-serif;
text-align: center;
@media (min-width: 201px) and (max-width: 500px) {
    font-size: 3.5rem;
    padding-left: 1rem;
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
width: 25%;
img {
    width: 95px;
    height: 80px;
}
figcaption {
    font-size: 12px;
    color: white;
    text-align: center;
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
@media (min-width: 201px) and (max-width: 500px) {
    width: 100%;
}
`

