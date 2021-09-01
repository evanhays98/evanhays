import React, {useState} from "react";
import {GiTennisRacket} from "react-icons/all";

const PaysVisite = ({
                   title,
                   logo
               }) => {

    return (
        <div className='sportcontainer'>
            <h1 className='grostitre'>Les pays que j'ai visité</h1>
            <h1 className='grostitre2'>22 / 195</h1>
            <div className='paysvisitewrapper'>
                <div className='PaysVisite'>
                    <div className='titlewrapper'>
                        <p className='title'>France</p>
                    </div>
                    <div className='logowrapper'>
                        <div className='imagewrap'>
                            <img className='img' src={require('../images/france.png').default} alt='flag'/>
                        </div>
                    </div>
                </div>
                <div className='PaysVisite'>
                    <div className='titlewrapper'>
                        <p className='title'>Italie</p>
                    </div>
                    <div className='logowrapper'>
                        <div className='imagewrap'>
                            <img className='img' src={require('../images/italy.png').default} alt='flag'/>
                        </div>
                    </div>
                </div>
                <div className='PaysVisite'>
                    <div className='titlewrapper'>
                        <p className='title'>Espagne</p>
                    </div>
                    <div className='logowrapper'>
                        <div className='imagewrap'>
                            <img className='img' src={require('../images/spain.png').default} alt='flag'/>
                        </div>
                    </div>
                </div>
                <div className='PaysVisite'>
                    <div className='titlewrapper'>
                        <p className='title'>Suisse</p>
                    </div>
                    <div className='logowrapper'>
                        <div className='imagewrap'>
                            <img className='img' src={require('../images/suisse.png').default} alt='flag'/>
                        </div>
                    </div>
                </div>
                <div className='PaysVisite'>
                    <div className='titlewrapper'>
                        <p className='title'>Allemagne</p>
                    </div>
                    <div className='logowrapper'>
                        <div className='imagewrap'>
                            <img className='img' src={require('../images/germany.png').default} alt='flag'/>
                        </div>
                    </div>
                </div>
                <div className='PaysVisite'>
                    <div className='titlewrapper'>
                        <p className='title'>Belgique</p>
                    </div>
                    <div className='logowrapper'>
                        <div className='imagewrap'>
                            <img className='img' src={require('../images/belgium.png').default} alt='flag'/>
                        </div>
                    </div>
                </div>
                <div className='PaysVisite'>
                    <div className='titlewrapper'>
                        <p className='title'>Pays-bas</p>
                    </div>
                    <div className='logowrapper'>
                        <div className='imagewrap'>
                            <img className='img' src={require('../images/netherland.png').default} alt='flag'/>
                        </div>
                    </div>
                </div>
                <div className='PaysVisite'>
                    <div className='titlewrapper'>
                        <p className='title'>Maroc</p>
                    </div>
                    <div className='logowrapper'>
                        <div className='imagewrap'>
                            <img className='img' src={require('../images/maroc.png').default} alt='flag'/>
                        </div>
                    </div>
                </div>
                <div className='PaysVisite'>
                    <div className='titlewrapper'>
                        <p className='title'>Tunisie</p>
                    </div>
                    <div className='logowrapper'>
                        <div className='imagewrap'>
                            <img className='img' src={require('../images/tunisia.png').default} alt='flag'/>
                        </div>
                    </div>
                </div>
                <div className='PaysVisite'>
                    <div className='titlewrapper'>
                        <p className='title'>Grèce</p>
                    </div>
                    <div className='logowrapper'>
                        <div className='imagewrap'>
                            <img className='img' src={require('../images/grece.png').default} alt='flag'/>
                        </div>
                    </div>
                </div>
                <div className='PaysVisite'>
                    <div className='titlewrapper'>
                        <p className='title'>Turquie</p>
                    </div>
                    <div className='logowrapper'>
                        <div className='imagewrap'>
                            <img className='img' src={require('../images/turkey.png').default} alt='flag'/>
                        </div>
                    </div>
                </div>
                <div className='PaysVisite'>
                    <div className='titlewrapper'>
                        <p className='title'>Croatie</p>
                    </div>
                    <div className='logowrapper'>
                        <div className='imagewrap'>
                            <img className='img' src={require('../images/croatie.png').default} alt='flag'/>
                        </div>
                    </div>
                </div>
                <div className='PaysVisite'>
                    <div className='titlewrapper'>
                        <p className='title'>Oman</p>
                    </div>
                    <div className='logowrapper'>
                        <div className='imagewrap'>
                            <img className='img' src={require('../images/oman.png').default} alt='flag'/>
                        </div>
                    </div>
                </div>
                <div className='PaysVisite'>
                    <div className='titlewrapper'>
                        <p className='title'>Arabie Saoudite</p>
                    </div>
                    <div className='logowrapper'>
                        <div className='imagewrap'>
                            <img className='img' src={require('../images/saudiarabia.png').default} alt='flag'/>
                        </div>
                    </div>
                </div>
                <div className='PaysVisite'>
                    <div className='titlewrapper'>
                        <p className='title'>Dubai</p>
                    </div>
                    <div className='logowrapper'>
                        <div className='imagewrap'>
                            <img className='img' src={require('../images/dubai.png').default} alt='flag'/>
                        </div>
                    </div>
                </div>
                <div className='PaysVisite'>
                    <div className='titlewrapper'>
                        <p className='title'>Inde</p>
                    </div>
                    <div className='logowrapper'>
                        <div className='imagewrap'>
                            <img className='img' src={require('../images/inde.png').default} alt='flag'/>
                        </div>
                    </div>
                </div>
                <div className='PaysVisite'>
                    <div className='titlewrapper'>
                        <p className='title'>Russie</p>
                    </div>
                    <div className='logowrapper'>
                        <div className='imagewrap'>
                            <img className='img' src={require('../images/russia.png').default} alt='flag'/>
                        </div>
                    </div>
                </div>
                <div className='PaysVisite'>
                    <div className='titlewrapper'>
                        <p className='title'>Chine</p>
                    </div>
                    <div className='logowrapper'>
                        <div className='imagewrap'>
                            <img className='img' src={require('../images/chineflag.png').default} alt='flag'/>
                        </div>
                    </div>
                </div>
                <div className='PaysVisite'>
                    <div className='titlewrapper'>
                        <p className='title'>Thailande</p>
                    </div>
                    <div className='logowrapper'>
                        <div className='imagewrap'>
                            <img className='img' src={require('../images/thai.png').default} alt='flag'/>
                        </div>
                    </div>
                </div>
                <div className='PaysVisite'>
                    <div className='titlewrapper'>
                        <p className='title'>Malaysia</p>
                    </div>
                    <div className='logowrapper'>
                        <div className='imagewrap'>
                            <img className='img' src={require('../images/malaysia.png').default} alt='flag'/>
                        </div>
                    </div>
                </div>
                <div className='PaysVisite'>
                    <div className='titlewrapper'>
                        <p className='title'>Sri Lanka</p>
                    </div>
                    <div className='logowrapper'>
                        <div className='imagewrap'>
                            <img className='img' src={require('../images/srilanka.png').default} alt='flag'/>
                        </div>
                    </div>
                </div>
                <div className='PaysVisite'>
                    <div className='titlewrapper'>
                        <p className='title'>Etat Unies</p>
                    </div>
                    <div className='logowrapper'>
                        <div className='imagewrap'>
                            <img className='img' src={require('../images/unitedstates.png').default} alt='flag'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaysVisite;