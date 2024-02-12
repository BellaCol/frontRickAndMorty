import  Cards from '../cards/Cards.jsx'
import {useSelector, useDispatch}from 'react-redux'
import { orderCards, filterCards } from '../../redux/actions.js';
import { useState } from 'react';

{/*import {connect} from 'react-redux'*/}

function Favorite(){
const [aux, setAux] = useState(false)
const myFavorites= useSelector((state)=>state.myFavorites)
const dispatch= useDispatch()
function handleOrder(e){
    dispatch(orderCards(e.target.value))
    setAux(!aux)
}
function handleFilter(e){
    dispatch(filterCards(e.target.value))
    
} 
return(<>
    <select onChange={handleOrder}>
       
        <option value ='A'>Ascendente</option>
        <option value ='D'>Descendente</option>
    </select>
    <select onChange={handleFilter}>
        <option value ='Male'>Male</option>
        <option value ='Female'>Female</option>
        <option value ='Genderless'>Genderless</option>
        <option value ='unknown'>Unknown</option>
        <option value ='All'>All</option>
        
    </select>
      <Cards characters={myFavorites}/>
   </>
   );

}

export default Favorite
{/*export function mapStateToProps(state){
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps,null)(Favorite)*/}