import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import EasterEgg from './EasterEgg';


export default function Navbar() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const [bgColor, setBgColor] = useState('rgba(149, 0, 255, 0.54)');

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        color += '8a';
        return color;
    };

    const handleHeaderClick = () => {
        setBgColor(getRandomColor());
    };


    return (
        <header onClick={handleHeaderClick} style={{ backgroundColor: bgColor}}>
            <nav>
                <ul className={isNavOpen ? 'open' : ''}>
                    <li><NavLink to="/" >Home</NavLink></li>
                    <li><NavLink to="/cv" >CV</NavLink></li>
                    <li><NavLink to="/portfolio" >Portfolio</NavLink></li>
                    <li><NavLink to="/contact" >Contact</NavLink></li>
                    <li><NavLink to="/about" >About</NavLink></li>
                </ul>
                <label className="hamburger-icon toggle-input" onClick={() => setIsNavOpen(!isNavOpen)} >
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </label>
            </nav>
            <EasterEgg />
        </header>
    );
}