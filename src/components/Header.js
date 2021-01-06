import React from "react";

const Header = (props) => {
    return (
        <header className="header" >
            <div className="header-row">
                  <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aae1113d-6d67-4b9d-9f5a-72c87ee934a7/dcwme31-3a9f6e9c-0d32-4ddf-a619-c016e0ae7024.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYWFlMTExM2QtNmQ2Ny00YjlkLTlmNWEtNzJjODdlZTkzNGE3XC9kY3dtZTMxLTNhOWY2ZTljLTBkMzItNGRkZi1hNjE5LWMwMTZlMGFlNzAyNC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.CG-YGB5f1C-pZKcAyyPZkRghaX1CS7yNaxNw06JQLao" alt="witcher-logo"
                  height="80px"/>
                <h1 className="col-sm-8"><span className="the-witcher">The Witcher</span> Bestiary Memory Game</h1>
            </div>
                <nav>
                    <p className="game-info">Get points by clicking on an image but don't click on any more than once!</p>
                    <strong>Top Score:</strong> <span>{props.highScore}</span><br></br>
                    <strong>Current Score:</strong>  <span>{props.currentScore}</span>
                </nav>
        </header>        
    )
}

export default Header
