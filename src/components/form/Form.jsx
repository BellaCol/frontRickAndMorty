import { useState, useEffect } from "react"
import  styles  from "./form.module.css"
import validation from './errors.js'

function Form({onLogin}){

const[form, setForm]= useState({
    mail: '',
    password:''
})
const[errors, setErrors]= useState({
    mail:'',
    password:''
})


const handleChange =(e)=>{
    const {name, value}=e.target

    setForm({
        ...form,
        [name]: value
    })
}
useEffect(()=>{
    setErrors(validation(form))
},[form.mail, form.password])

const handleSubmit=(e)=>{
    e.preventDefault()
    onLogin(form)
}

return(
<div className={styles.container} >
    <form onSubmit={handleSubmit}>
        <div className={styles.imgContainer}>
        <img src={`${import.meta.env.VITE_PUBLIC_URL}rick_and_morty_1.jpg`} alt="Imagen Rick and Morty" />
        </div>
        <label>Mail</label>
        <input  value={form.mail} onChange={handleChange} name = 'mail'  type='text' placeholder="Intruzca su email"/>
        {errors.mail&&<p>{errors.mail}</p>}
        <label>Password</label>
        <input value={form.value} onChange={handleChange} name = 'password'  type='password' placeholder="Intruzca su password"/>
        {errors.password&&<p>{errors.password}</p>}
        <button  type='submit'>Submit</button>
        </form> 
</div> 
)
} 

export default Form