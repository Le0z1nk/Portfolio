import React, {useState} from 'react'
import styled from 'styled-components'
import TabFront from "./Tabs/front.js"
import TabBack from "./Tabs/back.js"
import TabTudo from "./Tabs/tudo.js"

export const ContainerProjetos = styled.section `
background-color: rgb(9, 11, 23); 
color: white;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
h1 {
    font-size: 3.5rem;
    font-family: 'Raleway', sans-serif;
}
@media (min-width: 201px) and (max-width: 500px) {
    gap: 1rem;
    h1 {
        margin-top: 1rem;
        font-size: 4.5rem;
    }
}
@media (min-width: 501px) and (max-width: 900px) {
    margin-top: 1rem;
    gap: 10rem;
}
`
export const DivBotoes = styled.div `
width: 40vw;
display: flex;
justify-content: space-evenly;
margin-bottom: 1rem;
margin-top: 1rem;
button {
    background-color: white;
    border: none;
    border-radius: 5px;
    font-size: 1.1rem;
    width: 15%;
    height: 4vh;
    cursor: pointer;
    transition: 0.3s;
    font-weight: bold;
}
button:hover {
    background-color: #373b51;
    color: #fff;
    transition: 0.3s;
}
button.active {
    background-color: #373b51;
    color: #fff;
}
@media (min-width: 201px) and (max-width: 500px) {
    width: 100vw;
    button {
        font-size: 1rem;
        width: 25%;
    }
}
`


export default function Projetos() {
    const [activeTab, setActiveTab] = useState("tudo")

    const tab1 = () => {
        setActiveTab("front")
    }

    const tab2 = () => {
        setActiveTab("back")
    }

    const tab3 = () => {
        setActiveTab("tudo")
    }

    return(
        <ContainerProjetos>
        <h1> PROJETOS</h1> 
        <DivBotoes>
            <button onClick={tab1} className={activeTab === "front" ? "active" : ""}>Front-End</button>
            <button onClick={tab2} className={activeTab === "back" ? "active" : ""}>Back-End</button>
            <button onClick={tab3} className={activeTab === "tudo" ? "active" : ""}>Tudo</button>
        </DivBotoes>
        <div>
            {activeTab === "front" ? <TabFront /> : ""}
        </div>
        <div>
            {activeTab === "back" ? <TabBack /> : ""}
        </div>
        <div>
            {activeTab === "tudo" ? <TabTudo /> : ""}
        </div>
        </ContainerProjetos>      
    )
}