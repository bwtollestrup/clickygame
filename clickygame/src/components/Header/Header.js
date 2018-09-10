import React from "react";
import "./Header.css";

const Header = props => (
    <div className="header">
        <div className="title"><h1>{props.children}</h1></div>
        <div className="directions">
            <h4>
                Click an image to begin!
                <br />
                Click on an image to earn points, but don't click on any more than once!
                <br />
                <br />
            </h4>
        </div>
        <div className="scores">
            <span>
                <h3>
                Score: {props.score} | Highscore: {props.highscore}
                </h3>
            </span>
        </div>
    </div>
);

export default Header;
