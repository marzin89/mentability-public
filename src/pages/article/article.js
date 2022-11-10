// Importerar React och komponenten som genererar slumpmässiga citat
import React from 'react';
import Quote from '../../components/quotes/quote';

// Undersida för nyhetsinlägg
class Article extends React.Component {
    // Konstruktor som hämtar och lagrar artikeln
    constructor() {
        super();

        this.setState = this.setState.bind(this);
        this.renderContentMultipleParagraphs = this.renderContentMultipleParagraphs.bind(this);

        this.state = {
            title:   '',
            date:    '',
            imgUrl:  '',
            content: '',
            author:  '',
        }

        this.getArticle();
    }

    // Rendering
    render() {
        return (
            <main className="main-subpage">
                {/* Slumpmässigt genererat citat */}
                <Quote />
                <div className="gray-section">
                    {/* Nyhetsinlägg */}
                    <h1>{this.state.title}</h1>
                    <div className="article">
                        <p className="date">{this.state.date.slice(0, 10)}</p>
                        {/* Om innehållet består av flera stycken, körs funktionen som renderar innehållet som 
                            en array med stycken. Annars skrivs innehållet ut rakt av. */}
                        {this.state.content.indexOf('\r\n\r\n') > 0 ? this.renderContentMultipleParagraphs()
                        : <p>{this.state.content}</p>}
                        <p className="author">{this.state.author}</p>
                    </div>
                </div>
            </main>
        )
    }

    /* Funktionen hämtar nyhetsinlägget, ändrar sidans namn 
        och lagrar inlägget i state */
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
}

// Exporterar komponenten
export default Article;