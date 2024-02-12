import { useState } from "react";

const SearchBar = function ({onSearch}) {

   const [id, setId]= useState("")
   
   function handleChange(e){
      setId(e.target.value)
   }

   function handleClick(){
      
      if(Number(id)< 827 && Number(id)> 0 ){
      onSearch(id)
      setId('')
      }else{
         alert('Invalid Id')
      }
   }
   return (
      <div>
         <input id='inputSearch' value={id} type='text' onChange={handleChange} placeholder="search"/>
         <button id='searchButton' onClick={handleClick}>Buscar</button> 
      </div>
   );
}
export default SearchBar