import './NavBar.css'

function NavBar(props) {
    return (
      <div className="NavBar">
        <div className='container-nav'>
          <p>{props.title}</p>
          <div className="nav-bar"></div>
        </div>
      </div>
    );
  }

export default NavBar;