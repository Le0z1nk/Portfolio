import React from 'react'
import * as S from "./main_style.js"

export default function Main() {
    return(
        <>
        <S.Main>
          <S.ImgFoto src="../fotoeu.png" alt="foto" />
          <S.CaixaSobre>
          <S.Titulo1>Sobre mim</S.Titulo1>
          <S.Paragrafo> Olá! Sou Programador Front-End.</S.Paragrafo>
          </S.CaixaSobre>
          <S.CaixaHab>
            <S.TituloHab>Habilidades</S.TituloHab>
            <S.Caixaimghab>
              <figure>
                <img src="../html5.png" alt="html" />
                <figcaption>HTML5</figcaption>
              </figure>
               <img src="../css3.png" alt="css" />
               <img src="../git.png" alt="git" />
               <img src="../npm.png" alt="npm" />
               <img src="../JavaScript-logo.png" alt="javascript" />
               <img src="../reactimg.png" alt="react" />
               <img src="../styledcomponents.png" alt="styled components" />
            </S.Caixaimghab>
          </S.CaixaHab>
        </S.Main>
        </>
    )
}