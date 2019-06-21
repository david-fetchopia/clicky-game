import React from "react";
import "./style.css"
// <img alt="sbsp" className="click-item" src="https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014"></img>

function Main(props) {
    return (
        <main className="container">
            {props.players
                .sort(() => Math.random() - 0.5)
                .map((player) => {
                return(
                <img onClick={() => props.clickHandler(player)} alt="sbsp" data-id={player.name} className="click-item" src={player.image}></img>
                )
            })}
        </main>
        
    );
}

export default Main;