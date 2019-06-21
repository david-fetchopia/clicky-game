import React from "react";
import "./style.css"
// <img alt="sbsp" className="click-item" src="https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014"></img>

function Main(props) {
    console.log(props);
    console.log(props.players);
    return (
        <main className="container">
            <img alt="sbsp" className="click-item" src="./images/kawhi1.jpeg"></img>
        </main>
        
    );
}

export default Main;