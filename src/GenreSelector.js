import React, { Component } from 'react';
import CreatableSelect from 'react-select/creatable';
import {genresList} from "./genres";


export default class GenreSelector extends Component {
    handleChange = (newValue, actionMeta) => {
        console.group('Value Changed');
        console.log(newValue);
        console.log(`action: ${actionMeta.action}`);
        console.groupEnd();
        this.props.onGenreChange(newValue)
    };

    render() {
        return (
            <CreatableSelect
                isMulti
                onChange={this.handleChange}
                options={[genresList]}
            />
        );
    }
}