import React from 'react'
import * as S from "./main_style.js"

export default function Main() {
    return(
        <>
        <S.Main>
          <S.ImgFoto src="../fotoeu.png" alt="foto" />
          <S.CaixaSobre>
          <S.Titulo1>Sobre mim</S.Titulo1>
          <S.Paragrafo> Olá! Me chamo Leonardo e sou programador Front-End.</S.Paragrafo>
          </S.CaixaSobre>
          <S.CaixaHab>
            <S.TituloHab>Habilidades</S.TituloHab>
            <S.Caixaimghab>
              <figure>
                <img src="../html5.png" alt="html" />
                <S.NomeHab1>HTML5</S.NomeHab1>
              </figure>
              <figure>
               <img src="../css3.png" alt="css" />
               <S.NomeHab2>CSS3</S.NomeHab2>
               </figure>
               <figure>
               <img src="../git.png" alt="git" />
               <S.NomeHab3>GIT</S.NomeHab3>
               </figure>
               <figure>
               <img src="../npm.png" alt="npm" />
               <S.NomeHab4>NPM</S.NomeHab4>
               </figure>
               <figure>
               <img src="../JavaScript-logo.png" alt="javascript" />
               <S.NomeHab5>JAVASCRIPT</S.NomeHab5>
               </figure>
               <figure>
               <img src="../reactimg.png" alt="react" />
               <S.NomeHab6>REACT</S.NomeHab6>
               </figure>
               <figure>
               <img src="../styledcomponents.png" alt="styled components" />
               <figcaption>STYLED-COMPONENTS</figcaption>
               </figure>
            </S.Caixaimghab>
          </S.CaixaHab>
        </S.Main>
        </>
    )
}