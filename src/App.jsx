import './App.css';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav.jsx';
import About from './components/about/About.jsx';
import Favorite from './components/favorites/Favorite.jsx';
import Detail from './components/detail/Detail.jsx';
import Error404 from './components/error404/Error404.jsx';
import Form from './components/form/Form.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios'
import {Routes,Route,useNavigate} from 'react-router-dom';

function App() {
   const [characters, setCharacters]= useState([])
   const [access, setAccess]= useState(false)
   const navigate = useNavigate()
   /*const onLogin=(form)=>{
      const EMAIL ='test@gmail.com'
      const PASS ='123456'

      if(form.password===PASS&&form.mail===EMAIL){
         setAccess(true);
         navigate('./home')

      }
   }*/
   async function onLogin(form) {
      const { mail, password } = form;
      
      //const URL = 'http://localhost:3001/rickandmorty/login/';
      try{
      const {data}= await axios('/login/' + `?email=${mail}&password=${password}`)
      const { access } = data;
         setAccess(access);
         if(access===true){
            navigate('/home');
         }else{
            alert('Usuario o Clave incorrectos')
         }

      
      }catch(err){
         alert(err.message)
      }
   }


   function onClose(id){
      const onclose=[]
      id=parseInt(id)
      characters.map((person)=>{
         person.id!==id&&
         
         onclose.push(person)
         
      })

   
      setCharacters(onclose)
   }

   
   const APYKEY='pi-bellacol'

   async function onSearch(id){
        let id2=0
         for(let i=0; i<characters?.length; i++){
            if (characters[i].id == id) { 
               id2=id
            }
         } 
      
      if(id2===0){
       const{ data } = await axios(`/character/${id}`)
        
            try{
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } 
               
            }catch(error){
            window.alert(error.message);
            }
         
      
      }
   }

   useEffect(()=>{
      !access&&navigate('/login')
   },[access])
   return (
      <div className='App'>
         {/*<SearchBar onSearch={(characterID) => window.alert(characterID)} />*/}
         <Nav onSearch={onSearch}/>
         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/favorites' element={<Favorite onClose={onClose}/>}/>
            <Route path='/login' element={<Form onLogin={onLogin}/>}/>
            <Route path='/*' element={<Error404/>}/>
            <Route path='/detail/:id' element={<Detail characters={characters} />}/>
         </Routes>
         
         
         </div>
   );
}

export default App;
