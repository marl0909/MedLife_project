import React, {useState} from "react";
import './Header.css';
import {Link} from "react-scroll";
import logo from './../../assets/img/logo.png'
import butMenuClose from "../../assets/img/close-menu.png";
import butMenuOpen from "../../assets/img/menu.png";

export const Header = () => {

    const [isOpen, setIsOpen] = useState(false)

    const changeIsOpenInItems = () => {
        if(isOpen) setIsOpen(!isOpen)
    }

    return (
        <div className={'header-content shadow'}>
            <nav className={'nav'}>
            <div className={'logo-item'} >
                <img className={'logo'} src={logo} alt=""/>
            </div>
                <ul className={'nav-list' + (isOpen ? ' open' : '')}>
                    <li className={'nav-list__item'}>
                        <Link to="home" activeClass="active" spy={true} smooth={true} offset={-114} duration={500} onClick={changeIsOpenInItems}><h4>About Us</h4></Link>
                    </li>
                    <li className={'nav-list__item'}>
                        <Link to="services" activeClass="active" spy={true} smooth={true} offset={-114} duration={500} onClick={changeIsOpenInItems}><h4>Services and prices</h4></Link>
                    </li>
                    <li className={'nav-list__item'}>
                        <Link to="appointments" activeClass="active" spy={true} smooth={true} offset={-180} duration={500} onClick={changeIsOpenInItems}><h4>Appointments</h4></Link>
                    </li>
                </ul>
                <img onClick={() => setIsOpen(!isOpen)} className={'header-content__button-menu'} src={isOpen ? butMenuClose : butMenuOpen}/>
            </nav>
        </div>
    )
}