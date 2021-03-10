import './App.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import React from "react";
import ArticleCreator from "./ArticleCreator";
import ArticleList from "./ArticleList";
import {articles} from "./articles";


// interface AppState {
    //articles:any ;
    //editorContent:string;
// }


class App extends React.Component/*<void, AppState>*/ {
    constructor(props/*: void*/) {
        super(props)
        this.state = {
            articles: articles,
            editorContent: "",
            editorTitle: "",
            editorGenre: [],
            editorAuthor: ""
        }
    }

    render() {
        const onArticleCreate = () => {
            this.setState((state) => {
                return {
                    ...state,
                    articles: [...state.articles, {
                        articleTitle: this.state.editorTitle,
                        articleBody: this.state.editorContent,
                        articleGenre: this.state.editorGenre,
                        articleDate: new Date(),
                        articleAuthor: this.state.editorAuthor
                    }]
                }
            })
        }
        const onEditorStateChange = (event) => {
            this.setState((state) => {
                return {
                    ...state,
                    editorContent: event.getCurrentContent().getPlainText()
                }
            })
        }
        const onTitleChange = (newTitle) => {
            this.setState((state) => {
                return {
                    ...state,
                    editorTitle: newTitle
                }
            })
        }
        const onAuthorChange = (newAuthor) => {
            this.setState((state) => {
                return {
                    ...state,
                    editorAuthor: newAuthor
                }
            })
        }
        const onGenreChange = (newGenre) => {
            this.setState((state) => {
                return{
                    ...state,
                    editorGenre: newGenre
                }
            })
        }
        const { genre, fetchingData, selectedOption } = this.state;

        return (
            <>

                <ArticleList articles={this.state.articles}/>

                <ArticleCreator onArticleCreate={onArticleCreate}
                                onEditorStateChange={onEditorStateChange}
                                onTitleChange={onTitleChange}
                                onGenreChange={onGenreChange}
                                onAuthorChange={onAuthorChange}
                />
            </>
        )
    }
}

export default App;
