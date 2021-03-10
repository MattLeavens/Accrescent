import React, { Component } from 'react';
import CreatableSelect from 'react-select/creatable';
import {genresList} from "./genres";
import {ValueType} from "react-select/src/types";

export interface GenreSelectorProps{
    onGenreChange: (newGenres: string[]) => void;
}

export default class GenreSelector extends Component<GenreSelectorProps> {
    handleChange = (newValues: ValueType<{ label: string; value: string }, true>) => {
        const genresAsList = newValues.map(newValue => {
            return newValue.label;
        })
        this.props.onGenreChange(genresAsList)
    };

    render() {
        return (
            <CreatableSelect<{ label: string; value: string }, true>
                isMulti
                onChange={this.handleChange}
                options={genresList}
            />
        );
    }
}