import NavBar from '../navbar/NavBar'
import Icons from '../redes/Icons';
import './Header.css'

function Header() {
    return (
      <div className="Header">
        <div className='navbar'>
          <div className='nav'>
            <NavBar title="Menu"/>
            <NavBar title="Sobre mi"/>
          </div>
          <div className='ico'>
            <Icons />
            <Icons />
            <Icons />
          </div>
        </div>
        <div className="main-header">
          <div className='main-section'>
            <h1 className='text-title'>HOLA! SOY DESARROLLADOR FRONT-END</h1>
          </div>
            
        </div>
      </div>
    );
  }

export default Header;