import { Link } from 'react-router-dom';
import '../css/Header.css';

const Header = () => {
  return (
    <header className="site-header">
      <div className="site-logo">
        <h1>My Portfolio Site on React</h1>
      </div>
      <nav className="main-nav">
        <Link to="/portfolio/">Home</Link>
        <Link to="/portfolio/list/">Portfolio</Link>
        <Link to="/portfolio/aboutme">Aboutme</Link>
      </nav>
    </header>
  );
};

export default Header;