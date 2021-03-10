// import React from "react";
// import "./index.css";

export const genreList = [
    { value: "Gaming", label: "Gaming" },
    { value: "Tech", label: "Tech" },
    { value: "Fashion", label: "Fashion" }
]

const genres = [
    {
        value: "Gamers",
        label: "Gamers",
    },
    {
        value: "Techies",
        label: "Techies",
    }
]



export const updatedGenres = genres.map((item) => {
    item.label = (
        <div className="label">
            <span>{item.label}</span>
        </div>
    );
    return item;
});