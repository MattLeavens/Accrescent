import React from "react";
import ArticleInfo from "./ArticleInfo";
import Article from "./Article";

export interface ArticleListProps{
    articles: Article[];
}

export default function ArticleList({articles}:ArticleListProps) {
    const articlesAsComponents = articles.map(article => {
        return <ArticleInfo article={article} key={article.articleTitle} />
    })
    return (
        <>
            {articlesAsComponents}
            </>
    );
}
