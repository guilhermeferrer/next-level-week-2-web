import React, { useState, useEffect } from 'react';
import logo from '../../images/logo.svg';
import lading from '../../images/landing.svg';
import studyIcon from '../../images/icons/study.svg';
import giveClassesIcon from '../../images/icons/give-classes.svg';
import purpleHeartIcon from '../../images/icons/purple-heart.svg';
import { Link } from 'react-router-dom';

import './styles.css';
import api from '../../services/api';

export default function Landing() {
    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
        api.get('/connection').then(response => {
            setTotalConnections(response.data.total);
        });
    }, []);

    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logo} alt="logo" />
                    <h2>Sua plataforma de estudos online.</h2>
                </div>

                <img
                    src={lading}
                    alt="Plataforma de estudos"
                    className="hero-image"
                />

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Estudar" />
                        Estudar
                    </Link>

                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="Dar aulas" />
                        Dar aulas
                    </Link>
                </div>
                <span className="total-connections">
                    Total de {totalConnections} conexões já realizadas <img src={purpleHeartIcon} alt="Coração roxo" />
                </span>
            </div>
        </div>
    )
}