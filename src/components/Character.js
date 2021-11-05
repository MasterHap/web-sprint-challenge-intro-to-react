import react from "react";
import styled from 'styled-components'

const H2 = styled.h2`
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
`
const Card = styled.div`
    display: flex;
    justify-content: space-evenly;
    border: solid 5px;
    margin: 10%;
    margin-left: 20%;
    margin-right: 20%;
    border-radius: 10px;
    color: purple;
    text-shadow: 1px 1px 5px #fff;
    margin-top: 50px;
`
const P = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.5rem;
    margin-top: auto;
`

const Character = (props) => {
    console.log(props)

    return(
        <Card>
    <H2 key={"chararcterArticle-" + props.character.id} >{props.character.name}</H2>
    <P>Birth Year: {props.character.birth_year}</P>
    </Card>
    )
}

export default Character