import { Link } from 'react-router-dom'
import './navbar.scss'

const Navbar = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg px-5'>
        <Link to='/'>
          <img className='logo' src='AniBlogLogo.svg' alt='AniBlog Logo' />
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarTogglerDemo02'
          aria-controls='navbarTogglerDemo02'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
          <ul className='navbar-nav ml-auto mt-2 mt-lg-0'>
            <li className='nav-item active'>
              <Link className='nav-link' to='/articles'>
                ARTICLES
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/about'>
                ABOUT
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/contact'>
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
