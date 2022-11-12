import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { articleActions } from '../../../store/slices/article-slice';

function Article(props) {
    const dispatch = useDispatch();

    function handleLinkClick(e) {
        dispatch(articleActions.getArticle(e.currentTarget.parentElement.id));
        dispatch(articleActions.splitTextIntoParagraphs(props.article.content));
    }

    return (
        <article key={props.article.id} id={props.article.id} 
            className={`news-article ${props.class}`}>
            <h3>{props.article.title}</h3>
            <p className="date">{props.article.date.slice(0, 10)}</p>
            <p>{props.article.content.slice(0, 150) + ' ...'}</p>
            <p className="author">{props.article.author}</p>
            <Link className="find-out-more" to="/article" onClick={(e) => 
                handleLinkClick(e)}>Läs mer</Link>
        </article>
    );
}

export default Article;