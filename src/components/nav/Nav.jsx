import React from 'react'
import SearchBar from '../searchBar/SearchBar.jsx'
import { Link, useLocation } from 'react-router-dom'

const Nav= function({onSearch}){
    const location=useLocation()
    if(location.pathname==='/login'){
       
        return 'null'
    }
    
    return(
    <div>
        <SearchBar onSearch={onSearch}/>
        <Link to="/about">
            <button>About</button>
        </Link>
        <Link to="/home">
            <button>Home</button>
        </Link>
        <Link to="/favorites">
            <button>Favorites</button>
        </Link>
        <Link to={-1}>
            <button>Back</button>
        </Link>
    </div>
    )
}

export default Nav