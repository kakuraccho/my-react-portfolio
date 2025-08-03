// 内部モジュールのインポート
import './css/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePages';
import PortfolioPage from './pages/PortfolioPages';
import AboutmePage from './pages/AboutmePages';

// ルーティング用の機能をインポート
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='app-container'>
      <Header />
      <main>
        <Routes>
          <Route path="/portfolio/" element={<HomePage />} />
          <Route path="/portfolio/list/" element={<PortfolioPage />} />
          <Route path='/portfolio/aboutme/' element={<AboutmePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;