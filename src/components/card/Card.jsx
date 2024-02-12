import style from './card.module.css' 
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {removeFav, addFav } from '../../redux/actions'
import {connect} from 'react-redux'


   export function Card ({characters, removeFav, addFav, onClose, allCharacters}) {
   const[isFav,setIsFav]=useState(false)
   const{name, status, species, gender,origin, image, id}=characters
   
   const handleFavorite= function(){
      if(isFav){
         setIsFav(false)
         removeFav(id)
      }else{
         setIsFav(true)
         addFav(characters)
      }
   }
   
   useEffect(() => {
      for(let i=0; i<allCharacters?.length; i++){
         if (allCharacters[i].id == id) {
            setIsFav(true);
         }
      };
   }, []);  
   const handleClose=()=>{
      onClose(id)
      removeFav(id)
   }
   return (
      <div className={style.miDiv}>
          
         <button onClick={handleFavorite}>{isFav?'❤️':'🤍'}</button>
         {onClose&&<button className={style.buttonCancel} onClick={handleClose}> X </button>}
         <img src={image} alt = 'person ricky and morty'/> 
         <div >
         <Link to={`/detail/${id}`}><h2>{name}</h2></Link>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin.name}</h2>
         </div>
        
        
      </div>
   );
}

function mapDispatchToProps(dispacht){
   return {
      removeFav: (id)=>dispacht(removeFav(id)),
      addFav: (characters)=>dispacht(addFav(characters))
   }
}
export function mapStateToProps(state){
   return{
      allCharacters: state.allCharacters
   }
}

export default connect (mapStateToProps, mapDispatchToProps )(Card)
