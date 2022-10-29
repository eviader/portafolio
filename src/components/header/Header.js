import NavBar from '../navbar/NavBar';
import './Header.css'

function Header() {
    return (
      <div className="Header">
        <div className='navbar'>
            <NavBar/>
        </div>
        <div className="main-header">
          <div className='main-left'>
            <div className='esfera'></div>
            <div className='triangulo'></div>
          </div>
          <div className='main-right'>
            <h1>HOLA! MI NOMBRE ES EMANUEL</h1>
          </div>
            
        </div>
      </div>
    );
  }

export default Header;