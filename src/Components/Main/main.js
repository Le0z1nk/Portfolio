import React from 'react'
import * as S from "./main_style.js"
import Foto from "../imagens/fotoeu.png"
import HTML from "../imagens/html5.png"
import CSS from "../imagens/css3.png"
import Git from "../imagens/git.png"
import JavaScript from "../imagens/JavaScript-logo.png"
import ReactImg from "../imagens/reactimg.png"
import StyledComponents from "../imagens/styledcomponents.png"

export default function Main() {
    return(
        <>
        <S.Main>
          <S.ImagemPrincipal>
          <S.ImgFoto src={Foto} alt="foto" />
          </S.ImagemPrincipal>
          <S.CaixaSobre>
          <S.Titulo1>Sobre mim</S.Titulo1>
          <S.Paragrafo> Olá! Me chamo Leonardo e sou programador Front-End, moro no Rio de Janeiro e gosto muito de tecnologia!  ||  Email: leoamorim132@gmail.com</S.Paragrafo>
          </S.CaixaSobre>
          <S.CaixaHab>
            <S.TituloHab>Habilidades</S.TituloHab>
            <S.Caixaimghab>
              <figure>
                <img src={HTML} alt="html" />
                <S.NomeHab1>HTML5</S.NomeHab1>
              </figure>
              <figure>
               <img src={CSS} alt="css" />
               <S.NomeHab2>CSS3</S.NomeHab2>
               </figure>
               <figure>
               <img src={Git} alt="git" />
               <S.NomeHab3>GIT</S.NomeHab3>
               </figure>
               
               <figure>
               <img src={JavaScript} alt="javascript" />
               <S.NomeHab5>JAVASCRIPT</S.NomeHab5>
               </figure>
               <figure>
               <img src={ReactImg} alt="react" />
               <S.NomeHab6>REACT</S.NomeHab6>
               </figure>
               <figure>
               <img src={StyledComponents} alt="styled components" />
               <figcaption>STYLED-COMPONENTS</figcaption>
               </figure>
            </S.Caixaimghab>
          </S.CaixaHab>
        </S.Main>
        </>
    )
}