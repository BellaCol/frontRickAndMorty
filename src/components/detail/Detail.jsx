import axios from "axios"
import { useState, useEffect } from "react"
import {useParams} from 'react-router-dom'
import style from './detail.module.css' 

const Detail= function({characters}){
   
   const{id}=useParams()
   {/*function searchDetail(id){
      id=parseInt(id)
      let pers
      characters.map((person)=>{
       
         if (person.id===id){
            pers=person
         }
                        
      })
      return pers
   }*/}
   const APYKEY='pi-bellacol'
   
   const [character, setCharacter]= useState({})
  
   useEffect(() => {
      {/*const person=searchDetail(id);
      
         if (person.name) {
            setCharacter(person);
        
         } else {
            window.alert('No hay personajes con ese ID');
         }
      ;*/}
      
          axios(`/character/${id}`).then(
           ({ data }) => {
              if (data.name) {
                 setCharacter(data);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           }
         );
        return setCharacter({});
     }, [id]);


     
    return(
    <div className={style.miContainer}>  
    <div className={style.miDiv}>
       <img src={character.image&&character.image} alt = 'person ricky and morty'/> 
         <div>
            <h2>{character.name&&character.name}</h2>
            <h2>{character.status&&character.status}</h2>
            <h2>{character.species&&character.species}</h2>
            <h2>{character.gender&&character.gender}</h2>
            <h2>{character.origin?.name&&character.origin.name}</h2>
         </div>
    </div>
    </div>
    )
}

export default Detail