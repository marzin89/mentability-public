import { useSelector } from 'react-redux';

function Quote() {
    const content = useSelector((state) => state.quote.content);
    const author = useSelector((state) => state.quote.author);
    const errorMessage = useSelector((state) => state.quote.errorMessage);

    return (
        <div className="white-section">
            {content ?
                <div id="quote-section">                     
                    <p id="quote">{content}</p>
                    <p id="author">– {author}</p> 
                </div> :                   
                <p className="error" role="alert">{errorMessage}</p>
            }
        </div>
    );
}

export default Quote;