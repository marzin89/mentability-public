// Importerar komponenter
import Header from './components/header/header';
import Home from './pages/home/home';
import Article from './pages/article/article';
import Activity from './pages/activity/activity';
import Footer from './components/footer/footer';

// Importerar React Router för routing
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navlink,
  Navigate
} from 'react-router-dom';

/* "Huvudkomponenten" som renderar webbplatsen med router för 
  startsidan och undersidorna. Startsidan har en fallback-route */
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home /> } />
          <Route path="/article" element={<Article />} />
          <Route path="/activity" element={<Activity />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

// Exporterar komponenten
export default App;
