import React from "react";
import ArticleInfo from "./ArticleInfo";

export default function ArticleList({articles}) {
    const articlesAsComponents = articles.map(article => {
        return <ArticleInfo article={article} key={article.articleTitle} articleGenre={article.articleGenre} />
    })
    return (
        <>
            {articlesAsComponents}
            </>
    );
}
