import { Link } from 'react-router-dom'
import './navbar.scss'

const Navbar = () => {
  return (
    <div>
      <Link to='/'>
        <img className='logo' src='AniBlogLogo.svg' alt='AniBlog Logo' />
      </Link>
    </div>
  )
}

export default Navbar
