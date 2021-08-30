import {RiStarSFill} from "react-icons/all";
import {useState} from "react";

const Competence = ({
    title,
    point
    }) => {

    return (
        <div className='Competence'>
            <div className='titlewrapper'>
                <p className='title'>{title}</p>
            </div>
            <div className='starswrapper'>
                <RiStarSFill className={point >= 1 ? 'stars fill' : 'stars empty'}/>
                <RiStarSFill className={point >= 2 ? 'stars fill' : 'stars empty'}/>
                <RiStarSFill className={point >= 3 ? 'stars fill' : 'stars empty'}/>
                <RiStarSFill className={point >= 4 ? 'stars fill' : 'stars empty'}/>
                <RiStarSFill className={point >= 5 ? 'stars fill' : 'stars empty'}/>
            </div>
        </div>
    );
};

export default Competence;