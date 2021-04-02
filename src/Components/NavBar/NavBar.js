import React from 'react';
import './NavBar.css'
import logo from '../../Icon/Logo.png'
import { Button, Container } from 'reactstrap';
import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <Container>

            <nav className="nav">
                <div>
                <Link to="/home"><img className="logo" src={logo} alt=""/></Link>
                </div>
                <ul>
                    
                    <li>
                        <input className = "searchtype" placeholder =" Search for Your Trip" type="text"/>
                    </li>
                    <li>
                        <Link to="/news" className='nav-links'>News</Link>
                    </li>
                    <li>
                        <Link className="btn-book"className='nav-links' to="/search">Destination</Link>
                    </li>
                    <li>
                        <Link className="btn-book"className='nav-links' to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link className="btn-book" to="/login"> <Button size ="md" className='nav-log' style={{color:'white',background:'#F9A51A'}} > Login</Button> </Link>
                    </li>
                </ul>
            </nav>
        </Container>
    );
};

export default Header;