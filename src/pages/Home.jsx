import React from 'react'
import { Link } from 'react-router-dom'

import AppsIcon from '@mui/icons-material/Apps';
import { Avatar } from '@mui/material';
import './Home.scss'
import { Mic } from '@mui/icons-material';
import SearchInput from '../components/SearchInput';
import Footer from '../components/Footer';
const Home = () => {
    return (
        <div className='home__container'>
            <div className="home__header__container">
            <div className="header__left">
                    <Link to='/'>About</Link>
                    <Link to='/'>Store</Link>
                </div>

                <div className="header__right">
                    <Link to='/'>Gmail</Link>
                    <Link to='/'>Images</Link>
                    
                    <AppsIcon  className="app__icon"/>
                    <Avatar/>
                </div>
            </div>
            <div className="home_body__container">
                <div className="home__logo">
                    <img src="./google.png" alt="google logo" />
                </div>

                <div className="search__input__container">
                 <SearchInput />
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home