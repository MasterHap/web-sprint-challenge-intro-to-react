import react from "react";


const Character = (props) => {
    console.log(props)

    return(
        <div>
    <h2 key={"chararcterArticle-" + props.character.id} >{props.character.name}</h2>
    <p>{props.character.birth_year}</p>
    </div>
    )
}

export default Character