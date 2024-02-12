import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./actions"

const initialState={
    myFavorites: [],
    allCharacters:[],
}

const rootReducer= function(state=initialState, actions){
    switch (actions.type){
       /* case ADD_FAV: 
        
        return{
            ...state,
            myFavorites: [...state.allCharacters, actions.payload],
            allCharacters: [...state.allCharacters, actions.payload]
        }*/
        case ADD_FAV:
            return { ...state, 
                myFavorites: actions.payload, 
                allCharacters: actions.payload 
            } 
        /* case REMOVE_FAV: return{
            ...state,
            myFavorites: state.myFavorites.filter((char)=>{
               
                return char.id!== parseInt(actions.payload)
            }),
            allCharacters: state.allCharacters.filter((char)=>{
               
                return char.id!== parseInt(actions.payload)
            })
            

        }*/

        case REMOVE_FAV:
         return { ...state, 
                myFavorites: actions.payload,
                allCharacters:actions.payload,
                
              
            };


        case FILTER:
            let copy3= actions.payload==='All'?state.allCharacters:state.allCharacters.filter((char)=> char.gender=== actions.payload)
                            
            return{                
                ...state,
                myFavorites: copy3
            }

        case ORDER:
            let copy4 = state.myFavorites
            if(actions.payload === 'A'){
                copy4.sort((a,b)=>a.id-b.id)
                
            }else if(actions.payload === 'D'){
                copy4.sort((a,b)=>b.id-a.id)
                
            }

            return{
                ...state,
                myFavorites: copy4
            }
            
        

        default: return {...state}


    }

}


export default rootReducer;