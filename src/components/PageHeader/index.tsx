import React from 'react';
import { Link } from 'react-router-dom';

import backIcon from '../../assets/images/icons/back.svg'

import logoImg from '../../assets/images/logo.svg'

import './styles.css'

interface PageHeaderProps {
   title?: string,
   description?: string;
   subDescription?: string;
}
const PageHeader: React.FC<PageHeaderProps> = ({ title, description, subDescription, children }) => {
   return (
      <header className="page-header">
         <div className="top-bar-container">
            <Link to="/">
               <img src={backIcon} alt="Voltar" />
            </Link>
            <strong>{title}</strong>
            <img src={logoImg} alt="Proffy" />
         </div>

         <div className="header-content">
            <>
               <strong>{description}</strong>
               {subDescription && <p>{subDescription}</p>}
               {children}
            </>
         </div>

      </header>
   )
}

export default PageHeader;