// Importerar React och EmailJS
import React from 'react';
import emailjs from '@emailjs/browser';

// Kontaktformulär
class Contact extends React.Component {
    /* Konstruktor som lagrar alla inmatningar,
        fel- och bekräftelsemeddelanden samt resultatet
        av fetch-anropet */
    constructor(props) {
        super(props);

        this.setState              = this.setState.bind(this);
        this.form                  = React.createRef();
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange  = this.handleLastNameChange.bind(this);
        this.handleEmailChange     = this.handleEmailChange.bind(this);
        this.checkEmailIsValid     = this.checkEmailIsValid.bind(this);
        this.handlePhoneChange     = this.handlePhoneChange.bind(this);
        this.handleMessageChange   = this.handleMessageChange.bind(this);
        this.handleConsentChange   = this.handleConsentChange.bind(this);
        this.validate              = this.validate.bind(this);
        this.handleSubmit          = this.handleSubmit.bind(this);

        this.state = {
            firstName:      '',
            lastName:       '',
            email:          '',
            phone:          '',
            message:        '',
            consent:        false,
            firstNameErr:   '',
            lastNameErr:    '',
            emailErr:       '',
            emailInvalid:   '',
            messageErr:     '',
            consentErr:     '',
            confirmMessage: '',
            errorMessage:   '',
            result:         '',
        }
    }

    // Rendering
    render() {
        return (
            <div id="white-section-contact-form" className="white-section">
                <h2 id="h2-contact">Kontakt</h2>
                <form id="contact-form" ref={this.form} onSubmit={this.handleSubmit}>
                    {/* Förnamn med felmeddelande */}
                    <label htmlFor="first-name">Förnamn *</label>
                    <input id="first-name" name="first_name" type="text" className="text-input" aria-required="true"
                        aria-describedby="first-name-error" onChange={this.handleFirstNameChange}></input>
                    <p id="first-name-error" className="error" role="alert" style={this.state.firstNameErr ? 
                        {display: 'block'} : {display: 'none'}}>{this.state.firstNameErr}</p>
                    {/* Efternamn med felmeddelande */}
                    <label htmlFor="last-name">Efternamn *</label>
                    <input id="last-name" name="last_name" type="text" className="text-input" aria-required="true"
                        aria-describedby="last-name-error" onChange={this.handleLastNameChange}></input>
                    <p id="last-name-error" className="error" role="alert" style={this.state.lastNameErr ? 
                        {display: 'block'} : {display: 'none'}}>{this.state.lastNameErr}</p>
                    {/* E-post med felmeddelanden */}
                    <label htmlFor="email">E-post *</label>
                    <input id="email" name="email" type="email" className="text-input" aria-required="true"
                        aria-describedby="email-empty-error email-invalid-error" 
                        onChange={this.handleEmailChange}></input>  
                    <p id="email-empty-error" className="error" role="alert" style={this.state.emailErr ? 
                        {display: 'block'} : {display: 'none'}}>{this.state.emailErr}</p>
                    <p id="email-invalid-error" className="error" role="alert" style={this.state.emailInvalid ? 
                        {display: 'block'} : {display: 'none'}}>{this.state.emailInvalid}</p>
                    {/* Telefon */}
                    <label htmlFor="phone">Telefon</label>
                    <input id="phone" name="phone" type="tel" className="text-input" aria-required="false"
                        onChange={this.handlePhoneChange}></input>  
                    {/* E-post med felmeddelande */}
                    <label htmlFor="message">Meddelande *</label> 
                    <textarea id="message" name="message" className="text-input" aria-required="true"
                        aria-describedby="message-error" onChange={this.handleMessageChange}></textarea>  
                    <p id="message-error" className="error" role="alert" style={this.state.messageErr ? 
                        {display: 'block'} : {display: 'none'}}>{this.state.messageErr}</p>
                    {/* Samtycke med felmeddelande */}
                    <div id="consent-wrapper">
                        <input type="checkbox" id="consent" aria-required="true" aria-describedby="consent-error" 
                            onChange={this.handleConsentChange}></input>
                        <label htmlFor="consent">Samtycke *</label>
                    </div>
                    <p id="consent-error" className="error" role="alert" style={this.state.consentErr ? 
                        {display: 'block'} : {display: 'none'}}>{this.state.consentErr}</p>
                    {/* Skicka/rensa */}
                    <button type="submit" className="submit">Skicka</button>
                    <button type="reset" className="reset">Rensa</button>  
                    {/* Fel- och bekräftelsemeddelanden (fetch) */}  
                    <p className="confirm" role="alert" style={this.state.confirmMessage ? 
                        {display: 'block'} : {display: 'none'}}>{this.state.confirmMessage}</p>  
                    <p className="error" role="alert" style={this.state.errorMessage ?
                        {display: 'block'} : {display: 'none'}}>{this.state.errorMessage}</p>  
                </form>
            </div>
        )
    }

    /* "Handle"-funktionerna nedan lagrar användarens inmatningar i
        state när användaren skriver. För obligatoriska inmatningsfält
        uppdateras aria-invalid till false om inmatningsfältet innehåller 
        ett värde. E-postadressen måste även innehålla ett snabel-a 
        (måste dock vara andra tecknet eller senare) */
    handleFirstNameChange(e) {
        this.setState({
            firstName: e.target.value,
        })

        if (e.target.value) {
            e.target.setAttribute('aria-invalid', false);
        }
    }

    handleLastNameChange(e) {
        this.setState({
            lastName: e.target.value,
        })

        if (e.target.value) {
            e.target.setAttribute('aria-invalid', false);
        }
    }

    handleEmailChange(e) {
        this.setState({
            email: e.target.value,
        })

        if (e.target.value) {
            if (e.target.value.indexOf('@') > 1) {
                e.target.setAttribute('aria-invalid', false);
            }
        }
    }

    handlePhoneChange(e) {
        this.setState({
            phone: e.target.value,
        })
    }

    handleMessageChange(e) {
        this.setState({
            message: e.target.value,
        })

        if (e.target.value) {
            e.target.setAttribute('aria-invalid', false);
        }
    }

    handleConsentChange(e) {
        if (e.target.checked) {
            this.setState({
                consent: true,
            })

            e.target.setAttribute('aria-invalid', false);        
        }
    }

    /* Funktionen körs när användaren skickar formuläret och kontrollerar om
        e-postadressen är giltig (snabel-a som andra tecknet eller senare). 
        Annars genereras ett felmeddelande och aria-invalid ändras till true. 
        Är e-postadressen giltig, så ändras aria-invalid till false och 
        felmeddelandet tas bort */
    checkEmailIsValid(e) {
        if (e.target.value !== '') {
            if (e.target.value.indexOf('@') < 1) {
                this.setState({
                    emailInvalid: 'Ange en giltig e-postadress',
                })

                document.getElementById('email').setAttribute('aria-invalid', true);
            
            } else {
                this.setState({
                    emailInvalid: '',
                })
    
                document.getElementById('email').setAttribute('aria-invalid', false);
            }
        }
    }

    /* Funktionen körs när användaren skickar fomuläret och genererar
        felmeddelanden för tomma obligatoriska inmatningsfält (eller
        om e-postadressen är ogiltig) och ändrar aria-invalid till true.
        "Felaktiga" inmatningsfält får ett klassnamn som gör att de framhävs 
        visuellt. Om inmatningsfältet är korrekt ifyllt, ändras aria-invalid 
        till false, felmeddelandet tas bort och klassnamnet "återställs".
        Variabelns värde ökas med ett för varje korrekt ifyllt inmatningsfält
        och returneras */ 
    validate() {
        const firstName  = document.getElementById('first-name');
        const lastName   = document.getElementById('last-name');
        const email      = document.getElementById('email');
        const message    = document.getElementById('message');
        const consent    = document.getElementById('consent');
        const consentDiv = document.getElementById('consent-wrapper');
        let count = 0;

        if (!firstName.value) {
            this.setState({
                firstNameErr: 'Du måste ange ditt förnamn',
            })

            firstName.className = 'text-input-error';
            firstName.setAttribute('aria-invalid', true);
        
        } else {
            this.setState({
                firstNameErr: '',
            })

            firstName.className = 'text-input';
            firstName.setAttribute('aria-invalid', false);
            count = 1;
        }

        if (!lastName.value) {
            this.setState({
                lastNameErr: 'Du måste ange ditt efternamn',
            })

            lastName.className = 'text-input-error';
            lastName.setAttribute('aria-invalid', true);
        
        } else {
            this.setState({
                lastNameErr: '',
            })

            lastName.className = 'text-input';
            lastName.setAttribute('aria-invalid', false);
            count += 1;
        }

        if (!email.value) {
            this.setState({
                emailErr:     'Du måste ange din e-postadress',
                emailInvalid: '',
            })

            email.className = 'text-input-error';
            email.setAttribute('aria-invalid', true);
        
        } else {
            if (email.value.indexOf('@') < 1) {
                this.setState({
                    emailErr:     '',
                    emailInvalid: 'Ange en giltig e-postadress',
                })

                email.className = 'text-input-error';
                email.setAttribute('aria-invalid', true);
            
            } else {
                this.setState({
                    emailErr:     '',
                    emailInvalid: '',
                })

                email.className = 'text-input';
                email.setAttribute('aria-invalid', false);
                count += 1;
            }
        }

        if (!message.value) {
            this.setState({
                messageErr: 'Du måste skriva ett meddelande',
            })

            message.className = 'text-input-error';
            message.setAttribute('aria-invalid', true);
        
        } else {
            this.setState({
                messageErr: '',
            })

            message.className = 'text-input';
            message.setAttribute('aria-invalid', false);
            count += 1;
        }

        if (!consent.checked) {
            this.setState({
                consentErr: 'Du måste samtycka till att Mentability behandlar dina personuppgifter',
            })

            consentDiv.className = 'consent-error';
            consent.setAttribute('aria-invalid', true);
        
        } else {
            this.setState({
                consentErr: '',
            })

            consentDiv.className = '';
            consent.setAttribute('aria-invalid', false);
            count += 1;
        }

        return count;
    }

    /* Funktionen körs när användaren skickar formuläret. Formuläret 
        valideras och skickas med EmailJS om det är korrekt ifyllt */
    handleSubmit(e) {
        e.preventDefault();
        // Kör valideringsfunktionen ovan och lagrar returvärdet
        let count = this.validate();

        /* Om formuläret är korrekt ifyllt (fem "poäng" krävs), skickas meddelandet */
        if (count == 5) {
            // Skickar formuläret och lagrar ett fel- eller bekräftelsemeddelande
            emailjs.sendForm('service_005r77b', 'contact_form', this.form.current, '7V3K7ahJFB30PLvxy')
            .then((result) => {
                this.setState({
                    confirmMessage: 'Tack för ditt meddelande! Vi svarar så snart vi kan.',
                    errorMessage:   '',
                    result:         result.text,
                })
            })
            .catch((error) => {
                this.setState({
                    errorMessage:   'Ett serverfel har uppstått. Det gick inte att skicka meddelandet.'
                                        + ' Försök igen senare.',
                    confirmMessage: '',
                    result:         error.text,
                })
            })
        }
    }
}

// Exporterar komponenten
export default Contact;