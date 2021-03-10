import React from "react";

export default function ArticleInfo ({article}) {
   const {articleTitle, articleBody, articleDate, articleGenre, articleAuthor } = article
    return (
        <div>
            <h1>{articleTitle}</h1>
            <p>{articleDate}~~~{articleAuthor}~~~{JSON.stringify(articleGenre)}</p>
            <p>{articleBody}</p>
        </div>
    )
}

