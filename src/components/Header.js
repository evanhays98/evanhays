import React, {useState} from "react";
import {Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import { AiOutlineLogout } from "react-icons/ai";


const Header = () => {

    const [click, setclick] = useState(true);
    const handleClick = () => {
        setclick(!click)
    }

    function scrollTofooter() {
        setclick(true)
        window.scrollTo({
            top: document.getElementById('footer').offsetTop,
            behavior: 'smooth',
        })
    }


    return (
        <div className="nav">
            <Link className="navlinkT" to="/">
                <h1>Resume</h1>
            </Link>
            <FaBars className={click ? 'bars' : 'bars-none'} onClick={handleClick}/>
            <AiOutlineLogout className={click ? 'bars-none' : 'bars'} onClick={handleClick}/>
            <div className={click ? 'navmenu clicked' : 'navmenu'}>
                <Link className="navlink"  to="/Aboutme" onClick={() => setclick(true)}>
                    A Propos
                </Link>
                <Link className="navlink"  to="/Competence" onClick={() => setclick(true)}>
                    Competences
                </Link>
                <Link className="navlink"  to="/Experience" onClick={() => setclick(true)}>
                    Experiences
                </Link>
                <Link className="navlink"  to="/Formation" onClick={() => setclick(true)}>
                    Formations
                </Link>
                <Link className="navlink"  to="/Projet" onClick={() => setclick(true)}>
                    Projets
                </Link>
                <label className="navlink" onClick={scrollTofooter} >
                    Contact Me
                </label>
            </div>
        </div>
    );
};

export default Header;