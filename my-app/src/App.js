import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCodepen } from '@fortawesome/free-brands-svg-icons';
import Inicio from './components/Inicio';
import Nav from './components/Nav';
import Proyectos from './components/Proyectos';
import Habilidades from './components/Habilidades';

function App() {
  return (
    <div className="app">
      <Nav className="navegador" />
      <div className='container'>
        <Inicio className="inicio-pag" />
        <Proyectos />
        <Habilidades />
      </div>
      <aside className="left">
        <ul className='list'>
          <li><FontAwesomeIcon icon={faGithub} id='icon' /></li>
          <li><FontAwesomeIcon icon={faInstagram} id='icon' /></li>
          <li><FontAwesomeIcon icon={faTwitter} id='icon' /></li>
          <li><FontAwesomeIcon icon={faLinkedin} id='icon' /></li>
          <li><FontAwesomeIcon icon={faCodepen} id='icon' /></li>
        </ul>
        <div id='line-left'>
        </div>
      </aside>
      <aside className="right">
        <a href='mailto:ignaciomenna53@gmail.com' id='email'>ignaciomenna53@gmail.com</a>
        <div id='line-right'>
        </div>
      </aside>

    </div>
  );
}

export default App;
