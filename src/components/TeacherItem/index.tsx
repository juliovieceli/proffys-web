import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'
import api from '../../services/api';

export interface Teacher {
   id: number
   subject: string
   cost: number
   name: string
   avatar: string
   whatsapp: string
   bio: string
}
interface TeacherItemProps {
   teacher: Teacher
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {

function createNewConnection(){
   api.post('connections',{
      userId:teacher.id
   })
}

   return (
      <article className="teacher-item">
         <header>
            <img src={teacher.avatar} alt={teacher.name} />
            <div>
               <strong>{teacher.name}</strong>
               <span>{teacher.subject}</span>
            </div>
         </header>
         <p>{teacher.bio}</p>

         <footer>
            <p>
               Preco/hora
               <strong>R$ {teacher.cost.toFixed(2)}</strong>
            </p>
            <a 
               rel="noopener noreferrer"
               target="_blank"
               onClick={createNewConnection} 
               href={`https://wa.me/${teacher.whatsapp}?text=Tenho%20interesse%20em%20contratar%20uma%20aula`}>
               <img src={whatsappIcon} alt="whatsapp" />
               Entrar em Contato
            </a>
         </footer>
      </article>
   )
}

export default TeacherItem;