import React from "react";
import "./css/Buttons.css"; // Importing the CSS file
export function PrimButton({ children }) {
    return (
        <button className="primButton">{ children }</button>
    );
}
export function SecButton({ children }) {
    return (
        <button className="secButton">{ children }</button>
    );
}
export function ThirdButton({ children }) {
    return (
        <button className="ThirdButton">{ children }</button>
    );
}
