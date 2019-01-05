import React from "react";

export function List({ children }) {
    return (
        <div className="list-overflow-container">
            <ul className="list-group">{children}</ul>
        </div>
    );
}

export default function ListItem(props) {
    return (
        <div>
            <li classname="list-group-item">{props.children}</li>
            <button  onClick={props.save}>Save</button>
        </div>
    )
}