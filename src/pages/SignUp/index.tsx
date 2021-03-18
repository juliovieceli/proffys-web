import React from 'react';
import { Link } from 'react-router-dom';

import LoginInput from '../../components/LoginInput';

import logoImg from '../../assets/images/logo.svg'
import backgroundImage from '../../assets/images/background.svg'
import backIcon from '../../assets/images/icons/back.svg'

import './styles.css';
import Button from '../../components/Button';

const SignUp: React.FC = () => {
   return (
      <div id='page-signup'>
         <div id="page-signup-content" className="container">
            <div className="signup-container">
               <Link to="/">
                  <img src={backIcon} alt="Voltar" />
               </Link>
               <h1>Cadastro</h1>
               <h2>Preencha os dados abaixo para começar.</h2>
               <div className="input-container">
                  <LoginInput filled={false} name="name" label="Nome" placeholder="Nome" type="text" />
                  <LoginInput filled={false} name="surname" label="Sobrenome" placeholder="Sobrenome" type="text" />
                  <LoginInput filled={false} name="email" label="E-mail" placeholder="E-mail" type="text" />
                  <LoginInput filled={false} name="password" label="Senha" placeholder="Senha" isPassword />
               </div>

               <Button enabled>Entrar</Button>
            </div>

            <div className="logo-container">
               <img src={logoImg} alt="proffy" />
               <h2>Sua plataforma de estudos online.</h2>
            </div>
            <img className="background-img" src={backgroundImage} alt="background" />

         </div>
      </div>
   )
}

export default SignUp;