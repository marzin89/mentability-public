import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Quote from '../../components/quotes/quote';

function Article() {
    const article = useSelector((state) => state.article.article);
    const text = useSelector((state) => state.article.text);

    useEffect(() => {
        document.title = article.title;
    });

    return (
        <main className="main-subpage">
            <Quote />
            <div className="gray-section">
                <h1>{article.title}</h1>
                <div className="article">
                    <p className="date">{article.date.slice(0, 10)}</p>
                    {text.map((paragraph) => {
                        return (
                            <p>{paragraph}</p>
                        )
                    })}
                    <p className="author">{article.author}</p>
                </div>
            </div>
        </main>
    );
}

export default Article;