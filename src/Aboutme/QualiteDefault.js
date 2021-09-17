import {BiRun, FaBiking, FaParachuteBox, FaSwimmer, GiGolfFlag, GiTennisRacket, RiStarSFill} from "react-icons/all";
import React, {useState} from "react";

const QualiteDefault = ({
                   title,
                   logo
               }) => {

    return (
        <div className='qualitedefault'>
            <div className='qualcontainer'>
                <div className='qualiteT'>
                    <div className='titlecontainer'>
                        <h1 className='title'>3 Qualités</h1>
                    </div>
                </div>
                <div className='defaultT'>
                    <div className='titlecontainer'>
                        <h1 className='title'>3 Defaults</h1>
                    </div>
                </div>
                <div className='qualiteW'>
                    <h2 className='adjectif'>Autonome</h2>
                    <h2 className='adjectif'>Curieux</h2>
                    <h2 className='adjectif'>Fléxible</h2>
                </div>
                <div className='defaultW'>
                    <h2 className='adjectif'>Anxieux</h2>
                    <h2 className='adjectif'>Discret</h2>
                    <h2 className='adjectif'>Fumeur</h2>
                </div>
            </div>
        </div>
    );
};

export default QualiteDefault;