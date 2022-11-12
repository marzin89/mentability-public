import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Quote from '../../components/quotes/quote';

function Article() {
    const article = useSelector((state) => state.article.article);
    const text = useSelector((state) => state.article.text);
    console.log(text);

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

    /* Funktionen hämtar nyhetsinlägget, ändrar sidans namn 
        och lagrar inlägget i state */
    /*
    getArticle() {
        const id = localStorage.getItem('articleId');

        fetch(`https://localhost:7076/api/NewsArticle/${id}`)
        .then(response => response.json())
        .then((data) => {         
            document.title = data.title;
            
            this.setState({
                title:   data.title,
                date:    data.date,
                content: data.content,
                imgUrl:  data.imageUrl,
                author:  data.author,
            })
        })
    }

    /* Funktionen delar upp textinnehåll med flera stycken i en array
        och returnerar den */
        /*
        renderContentMultipleParagraphs() {
            let content = this.state.content.split('\r\n\r\n');
            let render  = [];
    
            content.map((paragraph) => {
                render.push(
                    <p>{paragraph}</p>
                )
            })
    
            return render;
        }
        */
}

export default Article;