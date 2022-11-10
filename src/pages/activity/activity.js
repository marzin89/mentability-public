// Importerar React och komponenten som genererar slumpmässiga citat
import React from 'react';
import Quote from '../../components/quotes/quote';

// Undersida aktiviteter
class Activity extends React.Component {
    // Konstruktor som hämtar och lagrar aktiviteten
    constructor() {
        super();

        this.setState = this.setState.bind(this);
        this.renderContentMultipleParagraphs = this.renderContentMultipleParagraphs.bind(this);

        this.state = {
            title: '',
            startDate: '',
            endDate: '',
            imgUrl: '',
            content: '',
        }

        this.getActivity();
    }

    // Rendering
    render() {
        return (
            <main className="main-subpage">
                {/* Slumpmässigt genererat citat */}
                <Quote />
                <div className="gray-section">
                    {/* Aktivitet */}
                    <h1>{this.state.title}</h1>
                    <div className="article">
                        {this.state.endDate ? 
                        <div>
                            <p className="date">{this.state.startDate.slice(0, 10) + ' –'}</p>
                            <p className="date">{this.state.endDate.slice(0, 10)}</p>
                        </div> 
                        : 
                        <p className="date">{this.state.startDate.slice(0, 10)}</p>}
                        {/* Om innehållet består av flera stycken, körs funktionen som renderar innehållet som 
                            en array med stycken. Annars skrivs innehållet ut rakt av. */}
                        {this.state.content.indexOf('\r\n\r\n') > 0 ? this.renderContentMultipleParagraphs()
                        : <p>{this.state.content}</p>}
                    </div>
                </div>
            </main>
        )
    }

    /* Funktionen hämtar aktiviteten, ändrar sidans namn 
        och lagrar aktiviteten i state */
    getActivity() {
        const id = localStorage.getItem('activityId');

        fetch(`https://localhost:7076/api/Activity/${id}`)
        .then(response => response.json())
        .then((data) => {
            document.title = data.title;

            this.setState({
                title:     data.title,
                startDate: data.startDate,
                endDate:   data.endDate,
                content:   data.content,
                imgUrl:    data.imageUrl,
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
export default Activity;