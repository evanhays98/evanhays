import {BiRun, FaBiking, FaParachuteBox, FaSwimmer, GiGolfFlag, GiTennisRacket, RiStarSFill} from "react-icons/all";
import React, {useState} from "react";

const Sport = ({
                        title,
                        logo
                    }) => {

    return (
        <div className='sportcontainer'>
            <h1 className='grostitre'>Les sports que j'ai pu pratiqué</h1>
            <div className='sportwrapper'>
                <div className='Sport'>
                    <div className='titlewrapper'>
                        <p className='title'>Tennis</p>
                    </div>
                    <div className='logowrapper'>
                        <GiTennisRacket/>
                    </div>
                </div>
                <div className='Sport'>
                    <div className='titlewrapper'>
                        <p className='title'>Bmx Race</p>
                    </div>
                    <div className='logowrapper'>
                        <FaBiking/>
                    </div>
                </div>
                <div className='Sport'>
                    <div className='titlewrapper'>
                        <p className='title'>Natation</p>
                    </div>
                    <div className='logowrapper'>
                        <FaSwimmer/>
                    </div>
                </div>
                <div className='Sport'>
                    <div className='titlewrapper'>
                        <p className='title'>Golf</p>
                    </div>
                    <div className='logowrapper'>
                        <GiGolfFlag/>
                    </div>
                </div>
                <div className='Sport'>
                    <div className='titlewrapper'>
                        <p className='title'>Saut en parachute</p>
                    </div>
                    <div className='logowrapper'>
                        <FaParachuteBox/>
                    </div>
                </div>
                <div className='Sport'>
                    <div className='titlewrapper'>
                        <p className='title'>Running</p>
                    </div>
                    <div className='logowrapper'>
                        <BiRun/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sport;