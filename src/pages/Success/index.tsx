import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom'

import backgroundImage from '../../assets/images/success-background.svg'
import confirmationIcon from '../../assets/images/confirmation.svg'

import './styles.css';

interface SuccessProps {
   title: string;
   subtitle: string;
   buttonText: string;
   redirect: string
}
const Success: React.FC<SuccessProps> = ({ title, subtitle, buttonText, redirect }) => {
   const history = useHistory();
   title = 'Cadastro concluído'
   subtitle = 'Agora você faz parte da plataforma da Proffy. Tenha uma ótima experiência.'
   buttonText = 'Ir para login'
   redirect = ''
   return (
      <div id='page-success'>
         <div id="page-success-content" className="container">
            <img className="background-img" src={backgroundImage} alt="background" />

            <div className="success-container">
               <img src={confirmationIcon} alt="Confirmacao de sucesso" />
               <h1>{title}</h1>
               <h2>{subtitle}</h2>
               <button type="submit" onClick={() => history.push(!!redirect ? redirect : '/')}>{buttonText}</button>
            </div>
         </div>
      </div>
   )
}

export default Success;