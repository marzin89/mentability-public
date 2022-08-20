// Sidfot
function Footer() {
    return (
        <footer>
            <div id="footer-wrapper">
                {/* Sidfotsnavigering */}
                <nav id="footer-nav">
                    <ul>
                        <li><a className="navlink" href="index.html#main">Start</a></li>
                        <li><a className="navlink" href="index.html#about">Om oss</a></li>
                        <li><a className="navlink" href="index.html#news">Nyheter</a></li>
                        <li><a className="navlink" href="index.html#activities">Aktiviteter</a></li>
                        <li><a className="navlink" href="index.html#contact-form">Kontakt</a></li>
                        <li><a className="navlink" href="https://localhost:7096/">Logga in</a></li>
                    </ul>
                </nav>
                {/* Kontaktuppgifter */}
                <ul id="contact">
                    <li>0155-123 45</li>
                    <li><a id="email-link" href="mailto:info@foretaget.se">info@mentability.se</a></li>
                    <li>Drottninggatan 1</li>
                    <li>123 45 Grönköping</li>
                </ul>
            </div>
        </footer>
    )
}

// Exporterar komponenten
export default Footer;