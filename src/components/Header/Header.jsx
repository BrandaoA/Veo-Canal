import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MTN_ORANGE from '../../assets/mtn_orange.jpeg'
import EU_Money from '../../assets/eu money.jpeg'
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {

  const [menu, setMenu] = useState('Homepage')
  const menuRef = useRef()

  const dropDown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible')
    e.target.classList.toggle('open')
  }
  return (
    <div className="headerContainer">
      <div className="logoSection">
        <FontAwesomeIcon
          icon="fa-solid fa-bars"
          style={{ color: '#fbf9f9' }}
          className="nav-dropDown"
          onClick={dropDown_toggle}
        />
        <ul ref={menuRef} className="nav-menu">
          <li
            onClick={() => {
              setMenu('Homepage')
            }}
          >
            <Link
              style={{
                textDecoration: 'none',
                color: 'white',
                fontWeight: 'bold',
              }}
              to="/"
            >
              Bouquets
            </Link>
            {menu === 'Homepage'}
          </li>
          <li
            onClick={() => {
              setMenu('migration')
            }}
          >
            <Link
              style={{
                textDecoration: 'none',
                color: 'white',
                fontWeight: 'bold',
              }}
              to="/migration"
            >
              Migration
            </Link>
            {menu === 'migration'}
          </li>
          <li
            onClick={() => {
              setMenu('options')
            }}
          >
            <Link
              style={{
                textDecoration: 'none',
                color: 'white',
                fontWeight: 'bold',
              }}
              to="/options"
            >
              Options
            </Link>
            {menu === 'options'}
          </li>
          <li
            onClick={() => {
              setMenu('receipt')
            }}
          >
            <Link
              style={{
                textDecoration: 'none',
                color: 'white',
                fontWeight: 'bold',
              }}
              to="/receipt"
            >
              Receipt
            </Link>
            {menu === 'receipt'}
          </li>
        </ul>
        <p className="logo">
          V<span className="green">E</span>
          <span className="red">O</span> Canal+
        </p>
      </div>
      <div className="images">
        <div className="image">
          <img src={MTN_ORANGE} alt="" />
        </div>
        <div className="image">
          <img src={EU_Money} alt="" />
        </div>
      </div>
    </div>
  )
}
export default Header