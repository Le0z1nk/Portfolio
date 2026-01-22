import styled from 'styled-components'

export const Header = styled.header`
display: flex;
justify-content: space-between;
height: 13vh;
align-items: center;
background-color: rgb(17, 17, 19);

@media (min-width: 201px) and (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}
@media (min-width: 501px) and (max-width: 900px) {

}
`
export const HeaderImg = styled.img`
margin-left: 1rem;
width: 15vw;
cursor: pointer;
@media (min-width: 201px) and (max-width: 500px) {
    width: 45vw;
}
@media (min-width: 501px) and (max-width: 900px) {
    width: 30vw;
}
`
export const Nav = styled.nav`
width: 40vw;
@media (min-width: 201px) and (max-width: 500px) {
    display: none;
}
@media (min-width: 501px) and (max-width: 900px) {
    width: 59vw;
}
`
export const HeaderUl = styled.ul`
list-style: none;
display: flex;
justify-content: space-evenly;
`
export const HeaderLi = styled.li`
font-size: 1.7rem;
cursor: pointer;
transition: 0.3s;
img {
    width: 2vw;
}
:hover {
    transform:scale(1.05);
    transition: 0.3s;
}
@media (min-width: 201px) and (max-width: 500px) {
    font-size: 15px;
}
a {
    color: white;
    text-decoration: none;
}
@media (min-width: 501px) and (max-width: 900px) {
    font-size: 2.2rem;
    img {
        width: 3vw;
    }
}
`
export const Curriculo = styled.li`
    font-size: 1.7rem;
    color: white;
    cursor: pointer;
    transition: 0.3s;
    width: 25%;
    background-color: rgb(35, 41, 87);
    text-align: center;
    border-radius: 10px;
    height: 10%;
    :hover {
        background-color: rgb(63, 73, 149);
        transition: 0.3s;
    }
    a {
    color: white;
    text-decoration: none;
}
`
export const Menu = styled.button`
display: none;
color: white;
background-color: rgb(9, 11, 23);
border: none;
font-size: 2rem;
position: relative;
right: 2rem;
@media (min-width: 201px) and (max-width: 500px) {
    display: flex;
}
`
export const LiMenu = styled.li`
color: white;
list-style: none;
img {
    width: 10vw;
}
a {
    color: white;
    text-decoration: none;
}
`
export const NavMenu = styled.nav`
background-color: rgb(9, 11, 23);
width: 100%;
display: flex;
justify-content: center;
ul {
    height: 22vh;
    font-size: 2.3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}
div {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
}
`