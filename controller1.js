import React from "react"
import ReactDOM from "react-dom"

rootEl = document.getElementById("root");

const page = (
    <div>
        <h1>Interesting facts about React</h1>
        <ul>
            <li>First relaeased in 2013</li>
            <li>Created by Jordan Walke</li>
        </ul>
    </div>
)

ReactDOM.render(page, rootEl);
