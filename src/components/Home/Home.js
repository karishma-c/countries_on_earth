import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import SearchFilterComponent from './../SearchFilterComponent/SearchFilterComponent'
import moonIcon from './../../images/icon-moon.png';
import sunIcon from './../../images/icon-sun.png';
import { ThemeContext } from "./../App";
import './Home.scss';

const Home = () => {

    const {enableDarkTheme, switchMode} = useContext(ThemeContext);
    const url = "https://restcountries.com/v3.1/all";
    const [responseData, setResponseData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => { 
        axios.get(url).then(response => {setResponseData(response.data)})
    }

    return (
        <div className="mainContainer">
            <header className="headerSection">
                <h1 className="heading">Where in the world?</h1>
                <h3><a className="gitLink" href="https://github.com/karishma-c/reactjs-from-scratch" target="_blank">GitHub</a></h3>
                <button id="switchMode" onClick={switchMode} >
                    {
                        enableDarkTheme === "light" ?
                        <>
                            <div className="moonImage">
                                <img className="Icon" src={moonIcon} alt="switchMode" />
                            </div> 
                            Dark Mode
                        </>
                        :
                        <>
                            <div className="sunImage">
                                <img className="Icon" src={sunIcon} alt="switchMode" />
                            </div>
                            Light Mode
                        </>
                    }
                </button>
            </header>
            <div className="contentSection">
                <SearchFilterComponent searchData={responseData} />
            </div>
            
        </div>
    )
}

export default Home;

