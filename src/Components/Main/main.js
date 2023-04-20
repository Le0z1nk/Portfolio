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
            
          </S.CaixaHab>
        </S.Main>
        </>
    )
}