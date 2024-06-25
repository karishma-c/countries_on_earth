import React, { useContext } from "react";
import SearchFilterComponent from './../SearchFilterComponent/SearchFilterComponent'
import moonIcon from './../../images/icon-moon.png';
import sunIcon from './../../images/icon-sun.png';
import { ThemeContext } from "./../App";
import data from './../../data.json';
import './Home.scss';

const Home = () => {

    const {enableDarkTheme, switchMode} = useContext(ThemeContext);

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
            {
                data &&
                <SearchFilterComponent data={data} />
            }
               
            </div> 
        </div>
    )
}

export default Home;

