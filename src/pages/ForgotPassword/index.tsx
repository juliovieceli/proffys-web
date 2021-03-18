import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import LoginInput from '../../components/LoginInput';

import logoImg from '../../assets/images/logo.svg'
import backgroundImage from '../../assets/images/background.svg'
import backIcon from '../../assets/images/icons/back.svg'
import Button from '../../components/Button';

import './styles.css';

const ForgotPassword: React.FC = () => {

   const [email, setEmail] = useState('')
   return (
      <div id='page-forgot'>
         <div id="page-forgot-content" className="container">
            <div className="forgot-container">
               <Link to="/">
                  <img src={backIcon} alt="Voltar" />
               </Link>
               <h1>Eita, esqueceu sua senha?</h1>
               <h2>Não esquenta, vamos dar um jeito nisso.</h2>
               <div className="input-container">
                  <LoginInput
                     onChange={e => setEmail(e.target.value)}
                     value={email}
                     filled={!!email}
                     name="email"
                     label="E-mail"
                     placeholder="E-mail"
                     type="text"
                  />
               </div>

               <Button enabled={!!email} >Redefinir senha</Button>
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

export default ForgotPassword;