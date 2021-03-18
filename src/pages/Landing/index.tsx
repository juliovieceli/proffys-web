import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import './styles.css'
import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'

import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'
import logoutIcon from '../../assets/images/icons/logout.svg'
import api from '../../services/api';

const Landing: React.FC = () => {

  const [totalConnections, setTotalConnections] = useState(0)
  const [signed, setSigned] = useState(false)

  useEffect(() => {
    api.get('connections')
      .then(response => {
        setTotalConnections(response.data.total)
      })
  }, [])

  return (
    <div id='page-landing'>
      <div id="page-landing-content" className="container">

        {signed
          ? (
            <div className="header-signed ">
              <Link to="/profile" className="avatar">
                <img src="https://avatars0.githubusercontent.com/u/31143289?s=460&u=c326defc0299d7b24db18f615d6a176813043a2d&v=4" alt="avatar" />
                Seu nome aqui
              </Link>
              <div></div>
              <button>
                <img src={logoutIcon} alt="logout" />
              </button>
            </div>
          )
          :
          null}
        <div className="logo-container">
          <img src={logoImg} alt="proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>
        <img
          src={landingImg}
          alt="Plataforma de estudos"
          className="hero-image"
        />

        <div className="buttons-container">

          <div className="information-text">
            <span className="welcome">
              Seja bem vindo <br />
              <b>O que deseja fazer?</b>
            </span>

            <span className="total-connections">
              Total de {totalConnections} conexões já realizadas
              <img src={purpleHeartIcon} alt="Coração roxo" />
            </span>

          </div>
          <div className="buttons">
            <Link to="/study" className="study">
              <img src={studyIcon} alt="Estudar" />
            Estudar
            </Link>
            <Link to="/give-classes" className="give-classes">
              <img src={giveClassesIcon} alt="Dar Aulas" />
              Dar Aulas
            </Link>

          </div>
        </div>

      </div>
    </div>
  )
};

export default Landing;
