import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom'

import './styles.css';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

import warningIcon from '../../assets/images/icons/warning.svg'
import camIcon from '../../assets/images/icons/cam.svg'
import backgroundImage from '../../assets/images/background-profile.svg'

import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import api from '../../services/api';

const Profile: React.FC = () => {
   const [scheduleItems, setScheduleItems] = useState([
      { weekDay: 0, from: '', to: '' }
   ])
   const [name, setName] = useState('')
   const [surname, setSurname] = useState('')
   const [avatar, setAvatar] = useState('')
   const [email, setEmail] = useState('')
   const [whatsapp, setWhatsapp] = useState('')
   const [bio, setBio] = useState('')
   const [subject, setSubject] = useState('')
   const [cost, setCost] = useState('')

   const history = useHistory()

   function addNewScheduleItem() {
      setScheduleItems([
         ...scheduleItems,
         { weekDay: 0, from: '', to: '' }
      ])
   }

   function handleCreateClass(e: FormEvent) {
      e.preventDefault()

      api.post('classes', {
         name,
         avatar,
         whatsapp,
         bio,
         subject,
         cost: Number(cost),
         schedule: scheduleItems
      })
         .then(() => {
            alert('Cadastro realizado com sucesso')

            history.push('/')
         })
         .catch(() => {
            alert('Erro no cadastro')
         })
   }

   function setScheduleItemValue(position: number, field: string, value: string) {
      const updateScheduleItems = scheduleItems.map((scheduleItem, index) => {
         if (index === position) {
            return { ...scheduleItem, [field]: value }
         } else {
            return scheduleItem;
         }
      })

      console.log(updateScheduleItems)
      setScheduleItems(updateScheduleItems)
   }

   return (
      <div id="profile-form" className="container">
         <PageHeader title="Meu perfil">
            <img className="background-img" src={backgroundImage} alt="background" />

            <div className="avatar-container">
               <img src="https://avatars0.githubusercontent.com/u/31143289?s=460&u=c326defc0299d7b24db18f615d6a176813043a2d&v=4"
                  alt="avatar"
                  className="avatar"
               />
               <img src={camIcon} alt="cam" className="alter-avatar" />
               <h2>Julio Vieceli</h2>
            </div>
         </PageHeader>
         <main>
            <form onSubmit={handleCreateClass}>
               <fieldset>
                  <legend>Seus Dados</legend>
                  <div className="input-container">
                     <Input
                        name="name"
                        label="Nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                     />
                     <Input
                        name="surname"
                        label="Sobrenome "
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                     />
                  </div>
                  <div className="input-container2">

                     <Input
                        name="email"
                        label="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                     />
                     <Input
                        name="whatsapp"
                        label="Whatsapp"
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                     />
                  </div>


                  <Textarea
                     name="bio"
                     label="Biografia (máx 300 carácteres)"
                     value={bio}
                     onChange={(e) => setBio(e.target.value)}
                  />
               </fieldset>
               <fieldset>
                  <div >
                     <legend>Sobre a aula</legend>

                     <div className="about-lesson">
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

                        <div className="separator"></div>


                        <Input
                           name="cost"
                           label="Custo da sua hora"
                           value={cost}
                           onChange={(e) => setCost(e.target.value)}
                        />
                     </div>
                  </div>
               </fieldset>

               <fieldset>
                  <legend>
                     Horários disponíveis
                  <button type="button" onClick={addNewScheduleItem}>
                        + Novo horário
                  </button>
                  </legend>

                  {scheduleItems.map((scheduleItem, index) => (
                     <>
                        <div key={scheduleItem.weekDay} className="schedule-item">
                           <Select
                              name="weekDay"
                              label="Dia da semana"
                              value={scheduleItem.weekDay}
                              onChange={e => setScheduleItemValue(index, 'weekDay', e.target.value)}
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
                              name="from"
                              label="Das"
                              type="time"
                              value={scheduleItem.from}
                              onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                           />
                           <Input
                              name="to"
                              label="Até"
                              type="time"
                              value={scheduleItem.to}
                              onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
                           />


                        </div>
                        <div className="exclude-hour" onClick={() => console.log('aqui')}>
                           <div></div>
                           <span>Excluir horário</span>
                           <div></div>
                        </div>

                     </>
                  ))

                  }
               </fieldset>

               <footer>
                  <p>
                     <img src={warningIcon} alt="Aviso importante" />
                  Importante <br />
                  Preencha todos os dados.
               </p>
                  <button type="submit">
                     Salvar cadastro
               </button>
               </footer>
            </form>
         </main>
      </div>
   )
}

export default Profile;