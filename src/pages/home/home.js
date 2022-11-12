import Quote from '../../components/quote/quote';
import Articles from '../../components/articles/articles';
import About from '../../components/about/about';
import Activities from '../../components/activities/activities';
import Contact from '../../components/contact/contact';

function Home() {
    return (
        <main id="main">
            <Quote />
            <section className="gray-section">
                <h1>Välkommen till Mentability!</h1>
                <Articles />
                <About />
                <Activities />
                <Contact />
            </section>
        </main>
    )
}

export default Home;