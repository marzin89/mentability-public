import { useSelector, useDispatch } from 'react-redux';
import { articleActions } from './store/slices/article-slice';
import { activityActions } from './store/slices/activity-slice';
import { quoteActions } from './store/slices/quote-slice';
import Header from './components/header/header';
import Home from './pages/home/home';
import Article from './pages/article/article';
import Activity from './pages/activity/activity';
import Footer from './components/footer/footer';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  const quotes     = useSelector((state) => state.quote.quotes);
  const articles   = useSelector((state) => state.article.articles);
  const activities = useSelector((state) => state.activity.activities);
  const dispatch   = useDispatch();

  if (!quotes) {
    fetch('https://localhost:7076/api/Quote')
    .then(response => response.json())
    .then((data) => {
        const min    = 0;
        const max    = data.length;
        const random = Math.floor(Math.random() * (max - min) + min);
  
        dispatch(quoteActions.getQuotes(data));
        dispatch(quoteActions.setRandomQuote(data[random]));
    })
    .catch(() => {
      dispatch(quoteActions.setErrorMessage(
        'Ett serverfel har uppstått.' + 
        ' Innehållet kan inte visas för tillfället. Försök igen lite senare.'
      ));
    });
  }

  if (!articles) {
    fetch('https://localhost:7076/api/NewsArticle')
    .then(response => response.json())
    .then((data) => {
        dispatch(articleActions.getArticles(data));
    });
  }

  if (!activities) {
    fetch('https://localhost:7076/api/Activity')
    .then(response => response.json())
    .then((data) => {
        dispatch(activityActions.getActivities(data));
    });
  }

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

export default App;
