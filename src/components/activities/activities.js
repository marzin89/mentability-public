// Importerar React och komponenten som renderar aktiviteterna
import React from 'react';
import Render from './render/render';

/* Komponenten hämtar alla aktiviteter och anpassar baserat på hur många
    aktiviteter som ska visas (om användaren väljer "Visa fler") */
class Activities extends React.Component {
    /* Konstruktor som hämtar alla aktiviteter. I state lagras alla
        aktiviteter, de aktiviteter som ska visas, antal aktiviteter och
        rader samt (eventuellt) ett felmeddelande */
    constructor(props) {
        super(props);

        this.setState         = this.setState.bind(this);
        this.renderActivities = this.renderActivities.bind(this);
        this.handleLinkClick  = this.handleLinkClick.bind(this);

        this.state = {
            activities:      [],
            render:          [],
            numberOfPosts:   3,
            numberOfColumns: 1,
            errorMessage:    '',
        }

        this.getActivities();
    }

    // Rendering
    render() {
        {/* Skriver ut alla aktiviteter och länken "Visa fler" eller ett felmeddelande */}
        return (
            <section id="activities">
                <h2 className="h2-home">Aktiviteter</h2>
                {this.state.activities ?
                    this.renderActivities() :
                    <p className="error" role="alert">{this.state.errorMessage}</p>
                }
                <p className="show-more"><a className="show-more-link" href=""
                    style={this.state.activities ? {display: 'block'} : {display: 'none'}}
                    onClick={this.handleLinkClick}>Visa fler</a></p>
            </section>
        )
    }

    /* Funktionen hämtar aktiviteter och lagrar dem (alla samt de som ska visas) 
        i state (eller ett felmeddelande) och beräknar antalet aktiviteter som ska 
        visas samt hur många rader som behövs */
    getActivities() {
        fetch('https://localhost:7076/api/Activity')
        .then(response => response.json())
        .then((data) => {
            let array = [];

            /* När användaren klickar på "Visa fler" ökas antalet aktiviteter som
                ska visas med tre. Detta antal aktiviteter lagras då i "render" */
            for (let i = 0; i < this.state.numberOfPosts; i ++) {
                if (data[i]) {
                    array.push(data[i]);
                }
            }

            this.setState({
                activities: data,
                render:     array,
            })

            /* Här beräknas och lagras antalet rader som behövs baserat på arrayens
                (som lagrar alla aktiviteter) längd. Varje rad innehåller (max) tre
                aktiviteter. Om längden kan delas med tre utan rest, så lagras resultatet
                i state. Annars avrundas resultatet och lagras i state */ 
            if (array.length % 3 != 0) {
                const foo = array.length / 3;
                const bar = array.length % 3;

                this.setState({
                    numberOfColumns: Math.floor(foo) + bar,
                })
            
            } else {
                this.setState({
                    numberOfColumns: array.length / 3,
                })
            }
        })
        // Ett felmeddelande genereras om det inte går att hämta aktiviteter
        .catch(() => {
            this.setState({
                errorMessage: 'Ett serverfel har uppstått.' + 
                ' Innehållet kan inte visas för tillfället. Försök igen lite senare.',
            })
        })
    }

    /* Funktionen returnerar en eller flera underkomponenter beroende på
        hur många rader som behövs */
    renderActivities() {
        /* Returnerar komponenten en gång om endast en rad behövs.
            Aktiviteterna ("render" innehåller det antal som ska visas)
            skickas med i props */
        if (this.state.numberOfColumns == 1) {
            return <Render activities={this.state.render} />
        
        /* Om fler rader behövs, returneras flera underkomponenter och lagras
            i en array som sedan returneras. Aktiviteterna ("render" innehåller 
            det antal som ska visas) skickas med i props. Notera att variabelns
            värde ökas med tre inför varje iteration eftersom varje rad innehåller
            (max) tre aktiviteter */
        } else {
            let count  = 0;
            let render = [];

            for (let i = count; i < this.state.render.length; i++) {
                render.push(<Render activities={this.state.render.slice(count, count + 3)} />);

                count += 3;
            }

            return render;
        }
    }

    /* Funktionen uppdaterar antalet aktiviteter som ska visas,
        antalet rader som behövs och antalet aktiviteter i "render"
        vid klick på "Visa fler". Alla värden ökas med tre */
    handleLinkClick(e) {
        e.preventDefault();

        let array = [];

        for (let i = 0; i < (this.state.numberOfPosts + 3); i ++) {
            if (this.state.activities[i]) {
                array.push(this.state.activities[i]);
            }
        }

        this.setState({
            numberOfPosts:   this.state.numberOfPosts + 3,
            numberOfColumns: this.state.numberOfColumns + 1,
            render:          array,
        })
    }
}

// Exporterar komponenten
export default Activities;