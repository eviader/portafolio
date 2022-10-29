import NavBar from '../navbar/NavBar';
import './Header.css'

function Header() {
    return (
      <div className="Header">
        <div className='navbar'>
            <NavBar/>
        </div>
        <div className="main-header">
            <h1>HOLA! MI NOMBRE ES EMANUEL</h1>
        </div>
      </div>
    );
  }

export default Header;