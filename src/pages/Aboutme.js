import { motion } from 'framer-motion';
import React from 'react';
import Projet from "../components/Projet";
import {Projet1, Projet2, Projet3} from "../Data/DataFormation";
import Competence from "../components/Competence";
import {Competence1, Competence2, Competence3, Competence4} from "../Data/DataComptence";
import {BiRun, FaBiking, FaParachuteBox, FaSwimmer, GiGolfFlag, GiTennisRacket} from "react-icons/all";
import Sport from "../Aboutme/Sport";
import PaysVisite from "../Aboutme/PaysVisite";

const Aboutme = () => {
    return (
        <motion.div className="aboutme"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}>

            <div className='bigwrapper1'>
                <div className='wrap11'>
                    <div className='titlewrapper'>
                        <h1><span className="title">Mes Informations</span></h1>
                    </div>
                    <div className="label-field-profile">
                        <p className="label-profile-1">Name</p>
                        <p className='span-profile'>|</p>
                        <p className="label-profile-2">Evan HAYS</p>
                    </div>
                    <div className="label-field-profile">
                        <p className="label-profile-1">Adresse</p>
                        <p className='span-profile'>|</p>
                        <div className='address'>
                            <p className="label-profile-2">3 rue des houx, 78760, Jouars-Pontchartrain</p>
                        </div>
                    </div>
                    <div className="label-field-profile">
                        <p className="label-profile-1">Toeic Score</p>
                        <p className='span-profile'>|</p>
                        <p className="label-profile-2">780</p>
                    </div>
                    <div className="label-field-profile">
                        <p className="label-profile-1">Permis de conduire</p>
                        <p className='span-profile'>|</p>
                        <p className="label-profile-2">Permis B</p>
                    </div>
                </div>
                <div className='wrap12'>
                    <div className='description'>
                       <p className='text'> Bonjour a toi qui viens en apprendre plus sur moi. Je suis une personne franche, sans prise de tete, attentioner envers autrui. Ce qui m'anime dans le travaille est de concevoir, gerer et developer des projet dans le monde de l'IT.</p>
                    </div>
                </div>
            </div>
            <div className='separation'/>
            <Sport />
            <div className='separation'/>
            <PaysVisite />
        </motion.div>
    );
};

export default Aboutme;