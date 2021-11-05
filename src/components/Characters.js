import React from 'react';
import Character from "./Character";

const Characters = (props) => {
    console.log(props)
    const characters =props.characters

    return (
        <article>
        {
        characters.map((character) => (
            <Character key={"character" + character.id} 
            character={character} />
        ))
        }
    </article>)
}
export default Characters