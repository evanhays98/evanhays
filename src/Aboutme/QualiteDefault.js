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
                    <h2 className='adjectif'>Incroyable</h2>
                    <h2 className='adjectif'>Incroyable</h2>
                    <h2 className='adjectif'>Incroyable</h2>
                </div>
                <div className='defaultW'>
                    <h2 className='adjectif'>Flemmard</h2>
                    <h2 className='adjectif'>Flemmard</h2>
                    <h2 className='adjectif'>Flemmard</h2>
                </div>
            </div>
        </div>
    );
};

export default QualiteDefault;