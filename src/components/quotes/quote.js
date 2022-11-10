import { useSelector } from 'react-redux';

function Quote() {
    const quote = useSelector((state) => state.quotes.quote);
    const errorMessage = useSelector((state) => state.quotes.errorMessage);

    return (
        <div className="white-section">
            {/* Skriver ut citatet eller ett felmeddelande */}
            {quote ?
                <div id="quote-section">                     
                    <p id="quote">{quote.content}</p>
                    <p id="author">– {quote.author}</p> 
                </div> :                   
                <p className="error" role="alert">{errorMessage}</p>
            }
        </div>
    );
}

export default Quote;