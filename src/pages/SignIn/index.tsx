import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import LoginInput from '../../components/LoginInput';

import logoImg from '../../assets/images/logo.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'
import backgroundImage from '../../assets/images/background.svg'

import './styles.css';
import Button from '../../components/Button';

const SignIn: React.FC = () => {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')


   return (
      <div id='page-signin'>
         <div id="page-signin-content" className="container">

            <div className="logo-container">
               <img src={logoImg} alt="proffy" />
               <h2>Sua plataforma de estudos online.</h2>
            </div>
            <img className="background-img" src={backgroundImage} alt="background" />

            <div className="signin-container">
               <h1>Fazer login</h1>
               <div>
                  <div className="input-container">
                     <LoginInput
                        filled={!!email}
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        label="E-mail"
                        placeholder="E-mail"
                        type="text"
                     />
                     <LoginInput
                        filled={!!password}
                        onChange={(e) => setPassword(e.target.value)}
                        name="password"
                        label="Senha"
                        placeholder="Senha"
                        isPassword

                     />
                  </div>
                  <>
                     <label className="check-container">
                        <input type="checkbox" />
                        <span className="checkmark" />
                     </label>
                  </>
                  <div className="forgot-container">
                     <label>Lembrar-me</label>
                     <Link to="/forgot">Esqueci minha senha</Link>
                  </div>

                  <Button enabled={!!email && !!password} type="submit">Entrar</Button>

                  <footer className="footer">
                     <div className="signup">
                        <label>Não tem conta?</label>
                        <Link to="/signup">Cadastre-se</Link>
                     </div>
                     <span>
                        É de graça
                        <img src={purpleHeartIcon} alt="Coração roxo" />
                     </span>
                  </footer>
               </div>
            </div>
         </div>
      </div>
   )
}

export default SignIn;