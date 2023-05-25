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
            <S.NavMenu>
                <ul>
                    <S.LiMenu><Link to="/">Início</Link></S.LiMenu>
                    <S.LiMenu><Link to="projetos">Projetos</Link></S.LiMenu>
                    <S.LiMenu>Currículo</S.LiMenu>
                    <div>
                    <S.LiMenu><a href="https://www.linkedin.com/in/leonardo-amorim-de-sousa-1b7329251/"><img src="../linkedinlogo.png" alt="logolinkedin" /></a></S.LiMenu>
                    <S.LiMenu><a href="https://github.com/Le0z1nk"><img src="../githublogo.png" alt="githublogo" /></a></S.LiMenu>
                    </div>
                </ul>
            </S.NavMenu>
        )
    }
    return(
        <>
        <BrowserRouter>
        <S.Header>
            <div>
         <Link to="/"><S.HeaderImg src="../Logo.png" alt="logo" /></Link>
         <S.Menu onClick={() => {Menu()}}>{open === true ? "X" : "☰"}</S.Menu>
         </div> 
        <S.Nav>
            <S.HeaderUl>
                <S.HeaderLi><Link to="/">Início</Link></S.HeaderLi>
                <S.HeaderLi><Link to="projetos">Projetos</Link></S.HeaderLi>
                <S.HeaderLi>Currículo</S.HeaderLi>
                <S.HeaderLi><a href="https://www.linkedin.com/in/leonardo-amorim-de-sousa-1b7329251/"><img src="../linkedinlogo.png" alt="logolinkedin" /></a></S.HeaderLi>
                <S.HeaderLi><a href="https://github.com/Le0z1nk"><img src="../githublogo.png" alt="githublogo" /></a></S.HeaderLi>
            </S.HeaderUl>
        </S.Nav>
        </S.Header>
        {open && Navegacao()}
        <Routes>
        <Route path="/" element={<Main />} />
            <Route path="/projetos" element={<Projetos />} />
        </Routes>
        </BrowserRouter>
        </>
    )
}