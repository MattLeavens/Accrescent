import React from "react";
import Article from "./Article";

export interface ArticleInfoProps{
    article: Article;
}

export default function ArticleInfo ({article}:ArticleInfoProps) {
   const {articleTitle, articleBody, articleDate, articleGenre, articleAuthor } = article
    return (
        <div>
            <h1>{articleTitle}</h1>
            <p>{articleDate}~~~{articleAuthor}~~~{articleGenre.join(", ")}</p>
            <p>{articleBody}</p>
        </div>
    )
}
