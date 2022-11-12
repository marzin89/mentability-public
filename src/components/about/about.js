import about from '../../images/about.png';

function About() {
    return (
        <section id="about">
            <h2>Om oss</h2>
            <div className="row">
                <div id="about-left">
                    <p>Mentability är mötesplatsen för dig som behöver en ljus stund i tillvaron.
                        Vi vänder oss i första hand till personer som lider av psykisk ohälsa,
                        men alla är välkomna, oavsett vilka förutsättningar du har.
                        På vårt klubbhus kan du delta i aktiviteter, fika, spela spel eller
                        prata med likasinnade. Vi finns till för varandra.
                    </p>
                    <p>Mentability består av ett 50-tal personer där många har psykiska diagnoser 
                        av olika slag. Verksamheten drivs ideellt och många av oss har andra jobb 
                        vid sidan om.
                    </p>
                    <p>Nedan ser du kommande aktiviteter. Alla aktiviteter är gratis. 
                        Vissa aktiviteter kräver anmälan senast en vecka i förväg av planeringsskäl.
                        Anmälan sker via kontaktformuläret.</p>
                    <p>Vi på Mentability ser fram emot att få träffa dig!</p>
                </div>
                <div id="about-right">
                    <img id="about-image" src={about} alt="En hjärna med två armar som spänner musklerna">
                    </img>
                </div>
            </div>
        </section>  
    );
}

export default About;