// Importerar React
import React from 'react';

// Komponent som genererar slumpmässiga citat
class Quotes extends React.Component {
    /* Konstruktor som hämtar/genererar citat och lagrar
        det i state (alternativt ett felmeddelande) */
    constructor() {
        super();

        this.setState = this.setState.bind(this);

        this.state = {
            quote:         '',
            errorMessage: '',
        }

        this.getQuotes();
    }

    // Rendering
    render() {
        return (
            <div className="white-section">
                {/* Skriver ut citatet eller ett felmeddelande */}
                {this.state.quote ?
                    <div id="quote-section">                     
                        <p id="quote">{this.state.quote.content}</p>
                        <p id="author">– {this.state.quote.author}</p> 
                    </div> :                   
                    <p className="error" role="alert">{this.state.errorMessage}</p>
                }
            </div>
        )
    }

    /* Funktionen hämtar alla citat och väljer ut ett slumpmässigt citat
        baserat på antalet citat. Om det inte går att hämta citat,
        genereras ett felmeddelande */
    getQuotes() {
        fetch('https://localhost:7076/api/Quote')
        .then(response => response.json())
        .then((data) => {
            const min    = 0;
            const max    = data.length;
            const random = Math.floor(Math.random() * (max - min) + min);

            this.setState({
                quote: data[random],
            })
        })
        .catch(() => {
            this.setState({
                errorMessage: 'Ett serverfel har uppstått.' + 
                ' Innehållet kan inte visas för tillfället. Försök igen lite senare.',
            })
        })
    }
}

// Exporterar komponenten
export default Quotes;