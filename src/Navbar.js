import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Navbar.css';
import logo from './img/logo.webp'

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (

        <div >

          
                <nav className='navbar' >
                    {/**************Logo*****************/}
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        <img src={logo} alt="delfos 369"></img>
                    </Link>
                    {/**************Menu Navegacion*****************/}
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'bi bi-x-lg': 'bi bi-list'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item cot'>
                            <Link to='/inicio' className='nav-links' onClick={closeMobileMenu}>
                            <h2>Home</h2>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/nosotros' className='nav-links' onClick={closeMobileMenu}>
                                <p>Calendario</p>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/servicios' className='nav-links' onClick={closeMobileMenu}  >
                                <p>Proyectos</p>
                            </Link>
                        </li>
                      
                        <li className='nav-item '>
                            <Link to='/cotiza' className='nav-links' onClick={closeMobileMenu}>
                            <p>Información</p>
                            </Link>
                        </li>
                    </ul>

                </nav>
              


         
        </div>
    );
}

export default Navbar;
