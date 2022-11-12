import Article from './article/article';
import ShowMoreBtn from './buttons/show-more-btn';
import { useState } from 'react';
import { useSelector } from 'react-redux';

function Articles() {
    const articles = useSelector((state) => state.article.articles);
    const [numberOfArticles, setNumberOfArticles] = useState(3);

    function showMore() {
        setNumberOfArticles((prev) => prev + 3);
    }

    return (
        <section id="news">
            <h2 className="h2-home">Nyheter</h2>
            <div className="row">
                {articles.length ? articles.map((article, index) => {
                    return (
                        <Article article={article} class={index < numberOfArticles ?
                            '' : 'hide'} />
                    );
                }) :
                <p className="error" role="alert">Ett serverfel har uppstått. 
                    Innehållet kan inte visas för tillfället. Försök igen lite senare.</p>}
            </div>
            {articles.length ? <div>{numberOfArticles < articles.length ? 
                <ShowMoreBtn function={showMore} />: null} </div> : null }
        </section>
    );
}

export default Articles;