import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    const firstNameRef  = useRef();
    const lastNameRef   = useRef();
    const emailRef      = useRef();
    const phoneRef      = useRef();
    const messageRef    = useRef();
    const consentRef    = useRef();
    const consentDivRef = useRef();
    const formRef       = useRef();
    const [firstNameErr, setFirstNameErr]       = useState('');
    const [lastNameErr, setLastNameErr]         = useState('');
    const [emailEmptyErr, setEmailEmptyErr]     = useState('');
    const [emailInvalidErr, setEmailInvalidErr] = useState('');
    const [messageErr, setMessageErr]           = useState('');
    const [consentErr, setConsentErr]           = useState('');
    const [errorMessage, setErrorMessage]       = useState('');
    const [confirmMessage, setConfirmMessage]   = useState('');
    const [count, setCount]                     = useState(0);

    function validate() {
        const firstName  = firstNameRef.current.value;
        const lastName   = lastNameRef.current.value;
        const email      = emailRef.current.value;
        const message    = messageRef.current.value;

        if (!firstName) {
            setFirstNameErr('Du måste ange ditt förnamn');
            firstNameRef.current.className = 'text-input-error';
            firstNameRef.current.setAttribute('aria-invalid', true);
        
        } else {
            setFirstNameErr('');
            firstNameRef.current.className = 'text-input';
            firstNameRef.current.setAttribute('aria-invalid', false);
            setCount((prev) => prev + 1);
        }

        if (!lastName) {
            setLastNameErr('Du måste ange ditt efternamn');
            lastNameRef.current.className = 'text-input-error';
            lastNameRef.current.setAttribute('aria-invalid', true);
        
        } else {
            setLastNameErr('');
            lastNameRef.current.className = 'text-input';
            lastNameRef.current.setAttribute('aria-invalid', false);
            setCount((prev) => prev + 1);
        }

        if (!email) {
            setEmailEmptyErr('Du måste ange din e-postadress');
            setEmailInvalidErr('');
            emailRef.current.className = 'text-input-error';
            emailRef.current.setAttribute('aria-invalid', true);
        
        } else {
            if (email.indexOf('@') < 1) {
                setEmailInvalidErr('Ange en giltig e-postadress');
                setEmailEmptyErr('');
                emailRef.current.className = 'text-input-error';
                emailRef.current.setAttribute('aria-invalid', true);
            
            } else {
                setEmailEmptyErr('');
                setEmailInvalidErr('');
                emailRef.current.className = 'text-input';
                emailRef.current.setAttribute('aria-invalid', false);
                setCount((prev) => prev + 1);
            }
        }

        if (!message) {
            setMessageErr('Du måste skriva ett meddelande');
            messageRef.current.className = 'text-input-error';
            messageRef.current.setAttribute('aria-invalid', true);
        
        } else {
            setMessageErr('');
            messageRef.current.className = 'text-input';
            messageRef.current.setAttribute('aria-invalid', false);
            setCount((prev) => prev + 1);
        }

        if (!consentRef.current.checked) {
            setConsentErr('Du måste samtycka till att Mentability behandlar dina personuppgifter');
            consentDivRef.current.className = 'consent-error';
            consentRef.current.setAttribute('aria-invalid', true);
        
        } else {
            setConsentErr('');
            consentDivRef.current.className = '';
            consentRef.current.setAttribute('aria-invalid', false);
            setCount((prev) => prev + 1);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        validate();

        if (count == 5) {
            emailjs.sendForm('service_005r77b', 'contact_form', formRef.current, '7V3K7ahJFB30PLvxy')
            .then((result) => {
                setConfirmMessage('Tack för ditt meddelande! Vi svarar så snart vi kan.');
                setErrorMessage('');
                console.log(result.text);
            })
            .catch((error) => {
                setErrorMessage(
                    'Ett serverfel har uppstått. Det gick inte att skicka meddelandet.'
                    + ' Försök igen senare.'
                );
                setConfirmMessage('');
                console.log(error.text);
            });
        }
    }

    return (
        <div id="white-section-contact-form" className="white-section">
            <h2 id="h2-contact">Kontakt</h2>
            <form id="contact-form" ref={formRef} onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="first-name">Förnamn *</label>
                <input id="first-name" name="first_name" type="text" className="text-input" 
                    aria-required="true" aria-describedby="first-name-error" ref={firstNameRef}>
                </input>
                {firstNameErr ? <p id="first-name-error" className="error" role="alert">
                    {firstNameErr}</p> : null}
                <label htmlFor="last-name">Efternamn *</label>
                <input id="last-name" name="last_name" type="text" className="text-input" 
                    aria-required="true" aria-describedby="last-name-error" ref={lastNameRef}>
                </input>
                {lastNameErr ? <p id="last-name-error" className="error" role="alert">
                    {lastNameErr}</p> : null}
                <label htmlFor="email">E-post *</label>
                <input id="email" name="email" type="text" className="text-input" aria-required="true"
                    aria-describedby="email-empty-error email-invalid-error" ref={emailRef}>
                </input>  
                {emailEmptyErr ? <p id="email-empty-error" className="error" role="alert">
                    {emailEmptyErr}</p> : null}
                {emailInvalidErr ? <p id="email-invalid-error" className="error" role="alert">
                    {emailInvalidErr}</p> : null}
                <label htmlFor="phone">Telefon</label>
                <input id="phone" name="phone" type="tel" className="text-input" aria-required="false" 
                    ref={phoneRef}></input>  
                <label htmlFor="message">Meddelande *</label> 
                <textarea id="message" name="message" className="text-input" aria-required="true"
                    aria-describedby="message-error" ref={messageRef}></textarea>  
                {messageErr ? <p id="message-error" className="error" role="alert">{messageErr}</p> 
                    : null}
                <div id="consent-wrapper" ref={consentDivRef}>
                    <input type="checkbox" id="consent" aria-required="true" 
                        aria-describedby="consent-error" ref={consentRef}></input>
                    <label htmlFor="consent">Samtycke *</label>
                </div>
                {consentErr ? <p id="consent-error" className="error" role="alert">
                    {consentErr}</p> : null}
                <button type="submit" className="submit">Skicka</button>
                <button type="reset" className="reset">Rensa</button>  
                {confirmMessage ? <p className="confirm" role="alert">{confirmMessage}</p> : null} 
                {errorMessage ? <p className="error" role="alert">{errorMessage}</p> : null}   
            </form>
        </div>
    );
}

export default Contact;