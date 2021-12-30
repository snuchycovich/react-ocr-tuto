import '../styles/Header.css'
import logo from '../assets/images/logo.png'

function Header() { 
  return (
    <div className="lmj-header">
      <img src={logo} alt='La maison Jungle' className='lmj-logo'/>
      <h1 className='lmj-title'>La Maison Jungle</h1>
    </div>
  )
}
export default Header