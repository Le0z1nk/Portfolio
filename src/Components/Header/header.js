import React, {useState} from 'react'
import * as S from "./header_style.js"
import Projetos from "../projetos.js"
import Main from "../Main/main.js"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
export default function Header() {
    const [open, setOpen] = useState(false)
    const Menu = () => {
        if (open === true) {
            setOpen(false) 
        } else {
            setOpen(true)
        }
    }
    const Navegacao = () => {
        return(
            <nav>
                <ul>
                    <S.LiMenu><Link to="/">Início</Link></S.LiMenu>
                    <S.LiMenu><Link to="projetos">Projetos</Link></S.LiMenu>
                    <S.LiMenu>Currículo</S.LiMenu>
                </ul>
            </nav>
        )
    }
    return(
        <>
        <BrowserRouter>
        <S.Header>
         <Link to="/"><S.HeaderImg src="../Logo.png" alt="logo" /></Link> 
        <S.Nav>
            <S.HeaderUl>
                <S.HeaderLi><Link to="/">Início</Link></S.HeaderLi>
                <S.HeaderLi><Link to="projetos">Projetos</Link></S.HeaderLi>
                <S.HeaderLi>Currículo</S.HeaderLi>
            </S.HeaderUl>
        </S.Nav>
        <S.Menu onClick={() => {Menu()}}>{open === true ? "X" : "☰"}</S.Menu>
        {open && Navegacao()}
        </S.Header>
        <Routes>
        <Route path="/" element={<Main />} />
            <Route path="/projetos" element={<Projetos />} />
        </Routes>
        </BrowserRouter>
        </>
    )
}