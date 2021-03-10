import './App.css';
import {Editor} from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import React from "react";
import Card from "./Card";
import Button from "./Button";
import Container from "./Container";
import GenreSelector from "./GenreSelector";

export interface ArticleCreatorProps{
    onTitleChange: any;
    onGenreChange: () => void;
    onEditorStateChange: () => void;
    onArticleCreate: () => void;
    onAuthorChange: any;
}

function ArticleCreator(props:ArticleCreatorProps) {
    return (

        <Container>
            <Card title="Create an Article">

                <input type="text" id="name" name="name" onChange={(event) => {
                    const title = event.target.value
                    // console.log(title)
                    props.onTitleChange(title)
                }}/>

                <input type="text" id="name" name="name" onChange={(event) => {
                    const author = event.target.value
                    // console.log(title)
                    props.onAuthorChange(author)
                }}/>

                <GenreSelector onGenreChange={props.onGenreChange}/>

                <Editor
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={props.onEditorStateChange}>
                </Editor>
            </Card>

            <Button buttonContent="submit" onClick={props.onArticleCreate}/>
        </Container>
    );
}

export default ArticleCreator;
