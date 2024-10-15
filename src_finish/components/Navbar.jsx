import { Link } from 'react-router-dom';
import style from './Navbar.module.css';

function Navbar() {
  return (
    <header className={style.navbar}>
      <h1><Link to="/">WebTech PUC Minas</Link></h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">Quem somos nós?</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;