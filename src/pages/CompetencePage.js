import { motion } from 'framer-motion';
import React from 'react';
import Competence from "../components/Competence";
import {
    Competence1,
    Competence2,
    Competence20,
    Competence21,
    Competence22,
    Competence23,
    Competence24,
    Competence25,
    Competence26, Competence27,
    Competence3, Competence30, Competence31, Competence32, Competence33, Competence34,
    Competence4,
    Competence5, Competence50, Competence51, Competence52, Competence53, Competence54, Competence55, Competence56,
    Competence6,
    Competence7, Competence8
} from "../Data/DataComptence";

const CompetencePage = () => {
    return (
        <motion.div className="competencepage"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}>
        <h1 className='grostitre'>Les langages de programations</h1>
        <div className='competencecontainer'>
            <Competence {...Competence1}/>
            <Competence {...Competence2}/>
            <Competence {...Competence3}/>
            <Competence {...Competence4}/>
            <Competence {...Competence5}/>
            <Competence {...Competence6}/>
            <Competence {...Competence7}/>
            <Competence {...Competence8}/>
        </div>
        <div className='separation'/>
            <h1 className='grostitre'>Les Outils (IT)</h1>
            <div className='competencecontainer'>
                <Competence {...Competence30}/>
                <Competence {...Competence31}/>
                <Competence {...Competence32}/>
                <Competence {...Competence33}/>
                <Competence {...Competence34}/>
            </div>
        <div className='separation'/>
        <h1 className='grostitre'>Les Outils (Autres)</h1>
        <div className='competencecontainer'>
            <Competence {...Competence20}/>
            <Competence {...Competence21}/>
            <Competence {...Competence22}/>
            <Competence {...Competence23}/>
            <Competence {...Competence24}/>
            <Competence {...Competence25}/>
            <Competence {...Competence26}/>
            <Competence {...Competence27}/>
        </div>
        <div className='separation'/>
        <h1 className='grostitre'>Conseil</h1>
        <div className='competencecontainer'>
            <Competence {...Competence50}/>
        </div>
            <div className='separation'/>
        <h1 className='grostitre'>Innovation</h1>
        <div className='competencecontainer'>
            <Competence {...Competence51}/>
            <Competence {...Competence52}/>
            <Competence {...Competence53}/>
            <Competence {...Competence54}/>
        </div>
            <div className='separation'/>
        <h1 className='grostitre'>Management</h1>
        <div className='competencecontainer'>
            <Competence {...Competence55}/>
            <Competence {...Competence56}/>
        </div>
        </motion.div>
    );
};

export default CompetencePage;