import Card from '../card/Card.jsx';
import './less/cards.scss'


 const Cards= function (props){
   return (<div className="div-cards" >
      {props.characters.map((character)=>(
         <Card key={character.id} onClose= {props.onClose} characters={character}/>
      ))}
   </div>);
}
export default Cards