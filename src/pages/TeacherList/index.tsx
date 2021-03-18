import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem,{ Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css';
import api from '../../services/api';


const TeacherList: React.FC = () => {
   
   const [teachers, setTeachers] = useState([])

   const [subject, setSubject] = useState('')
   const [weekDay, setWeekDay] = useState('')
   const [time, setTime] = useState('')


   async function searchTeachers(e:FormEvent){
      e.preventDefault()

      const response = await  api.get('classes',{
         params:{
            subject,
            weekDay,
            time
         }
      })

      setTeachers(response.data)

   }

   return (
      <div id="page-teacher-list" className="container">
         <PageHeader title="Estes são os proffys disponíveis">
            <form action="submit" id="search-teachers" onSubmit={searchTeachers}>

               <Select
                  name="subject"
                  label="Matéria"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  options={[
                     { value: 'Artes', label: 'Artes' },
                     { value: 'Biologia', label: 'Biologia' },
                     { value: 'Educação Física', label: 'Educação Física' },
                     { value: 'Física', label: 'Física' },
                     { value: 'Geografia', label: 'Geografia' },
                     { value: 'História', label: 'História' },
                     { value: 'Matemática', label: 'Matemática' },
                     { value: 'Português', label: 'Português' },
                     { value: 'Química', label: 'Química' },
                  ]}
               />
               <Select
                  name="weekDay"
                  label="Dia da semana"
                  value={weekDay}
                  onChange={(e) => setWeekDay(e.target.value)}
                  options={[
                     { value: '0', label: 'Domingo' },
                     { value: '1', label: 'Segunda-Feira' },
                     { value: '2', label: 'Terça-Feira' },
                     { value: '3', label: 'Quarta-Feira' },
                     { value: '4', label: 'Quinta-Feira' },
                     { value: '5', label: 'Sexta-Feira' },
                     { value: '6', label: 'Sábado' },
                  ]}
               />
               <Input 
                  type="time" 
                  name="time" 
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  label="Dia da Semana" 
               />

                  <button type="submit">Buscar</button>

            </form>
         </PageHeader>

         <main>
            {teachers.map((teacher:Teacher) => (
               <TeacherItem key={teacher.id} teacher ={teacher}/>
            ))}

         </main>
      </div>
   )
}

export default TeacherList;