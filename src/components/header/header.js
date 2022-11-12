import { useState } from 'react';
import logo from '../../images/logo.jpg';

function Header() {
    const [showNav, setShowNav] = useState(false);

    function toggleNav(e, value) {
        e.preventDefault();
        setShowNav(value);
    }

    return (
        <header>
            <div id="header-wrapper">
                <a href="/" id="logo" role="button" aria-label="Länk till startsidan">
                    <img src={logo} alt="Mentabilitys logotyp" />
                </a>
                <div id="header-right">
                    <form id="search" action="index.html" method="post">
                        <label htmlFor="search-bar">Sök</label>
                        <input id="search-bar" type="search"></input>
                        <input id="search-btn" className="button" type="submit" value="Sök"></input>
                    </form>
                    <div id="nav-icon" role="button" aria-label="Hamburgerikon" aria-expanded="false"
                        onClick={(e) => toggleNav(e, true)}>
                        <div id="bar1" className="bar"></div>
                        <div id="bar2" className="bar"></div>
                        <div id="bar3" className="bar"></div>
                    </div>
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
                {showNav ? 
                <nav id="main-nav-mobile" className="main-nav">
                    <ul>
                        <li><a className="navlink" href="index.html">Start</a></li>
                        <li><a className="navlink" href="index.html#about">Om oss</a></li>
                        <li><a className="navlink" href="index.html#news">Nyheter</a></li>
                        <li><a className="navlink" href="index.html#activities">Aktiviteter</a></li>
                        <li><a className="navlink" href="index.html#contact-form">Kontakt</a></li>
                        <li><a className="navlink" href="https://localhost:7096/">Logga in</a></li>
                        <li><a className="navlink" href="#" onClick={(e) => toggleNav(e, false)}>
                            Stäng</a></li>
                    </ul>
                </nav> : null}
            </div>
        </header>
    );
}

export default Header;