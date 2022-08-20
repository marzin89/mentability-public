// Importerar React
import React from "react";
import logo from '../../images/logo.jpg';

// Sidhuvud
class Header extends React.Component {
    // Konstruktor
    constructor(props) {
        super(props);

        this.handleNavIconClick = this.handleNavIconClick.bind(this);
    }

    // Rendering
    render() {
        return (
            <header>
                <div id="header-wrapper">
                    {/* Logotyp */}
                    <a href="/" id="logo" role="button" aria-label="Länk till startsidan">
                        <img src={logo} alt="Mentabilitys logotyp" />
                    </a>
                    <div id="header-right">
                        {/* Sökruta */}
                        <form id="search" action="index.html" method="post">
                            <label htmlFor="search-bar">Sök</label>
                            <input id="search-bar" type="search"></input>
                            <input id="search-btn" className="button" type="submit" value="Sök"></input>
                        </form>
                        {/* Hamburgerikon */}
                        <div id="nav-icon" role="button" aria-label="Hamburgerikon" aria-expanded="false"
                            onClick={this.handleNavIconClick}>
                            <div id="bar1" className="bar"></div>
                            <div id="bar2" className="bar"></div>
                            <div id="bar3" className="bar"></div>
                        </div>
                        {/* Desktopnavigering */}
                        <nav id="main-nav-desktop" className="main-nav">
                            <ul>
                                <li><a className="navlink" href="index.html#main">Start</a></li>
                                <li><a className="navlink" href="index.html#about">Om oss</a></li>
                                <li><a className="navlink" href="index.html#news">Nyheter</a></li>
                                <li><a className="navlink" href="index.html#activities">Aktiviteter</a></li>
                                <li><a className="navlink" href="index.html#contact-form">Kontakt</a></li>
                                <li><a className="navlink" href="https://localhost:7096/">Logga in</a></li>
                            </ul>
                        </nav>
                    </div>
                    {/* Mobilnavigering */}
                    <nav id="main-nav-mobile" className="main-nav">
                        <ul>
                            <li><a className="navlink" href="index.html">Start</a></li>
                            <li><a className="navlink" href="index.html#about">Om oss</a></li>
                            <li><a className="navlink" href="index.html#news">Nyheter</a></li>
                            <li><a className="navlink" href="index.html#activities">Aktiviteter</a></li>
                            <li><a className="navlink" href="index.html#contact-form">Kontakt</a></li>
                            <li><a className="navlink" href="https://localhost:7096/">Logga in</a></li>
                            <li><a className="navlink" href="#" onClick={this.handleCloseLinkClick}>Stäng</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }

    // Visar hamburgermenyn och uppdaterar aria-expanded
    handleNavIconClick(e) {
        document.getElementById('main-nav-mobile').style.display = 'block';
        e.target.setAttribute('aria-expanded', true);
    }

    // Döljer hamburgermenyn och uppdaterar aria-expanded
    handleCloseLinkClick(e) {
        e.preventDefault();
        document.getElementById('main-nav-mobile').style.display = 'none';
        document.getElementById('nav-icon').setAttribute('aria-expanded', false);
    }
}

// Exporterar komponenten
export default Header;