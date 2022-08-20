// Importerar React och Link från React Router
import React from 'react';
import { Link } from 'react-router-dom';

/* Komponent som renderar en rad med nyhetsinlägg. 
    Textinnehållet skrivs ut i avkortad form.
    Inläggets id lagras i localStorage så att det kan 
    hämtas från undersidan för inlägg */
function Render(props) {
    return (
        <div className="row">
            {
                props.articles.map((article) => {
                    return (
                        <article key={article.id} className="news-article">
                            <h3>{article.title}</h3>
                            <p className="date">{article.date.slice(0, 10)}</p>
                            <p>{article.content.slice(0, 150) + ' ...'}</p>
                            <p className="author">{article.author}</p>
                            <Link id={`article${article.id}`} className="find-out-more" to="/article"
                                onClick={() => {localStorage.setItem('articleId', article.id)}}>
                                Läs mer</Link>
                        </article>
                    )
                })
            }
        </div>
    )
}

// Exporterar komponenten
export default Render;