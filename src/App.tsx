// 内部モジュールのインポート
import './css/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePages';
import AboutPage from './pages/AboutPages';

// ルーティング用の機能をインポート
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;