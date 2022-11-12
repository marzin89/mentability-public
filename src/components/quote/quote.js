import { useSelector } from 'react-redux';

function Quote() {
    const content = useSelector((state) => state.quote.content);
    const author = useSelector((state) => state.quote.author);

    return (
        <div className="white-section">
            {content ?
                <div id="quote-section">                     
                    <p id="quote">{content}</p>
                    <p id="author">– {author}</p> 
                </div> :                   
                <p className="error" role="alert">
                    Ett serverfel har uppstått. 
                    Innehållet kan inte visas för tillfället. 
                    Försök igen lite senare.</p>
            }
        </div>
    );
}

export default Quote;