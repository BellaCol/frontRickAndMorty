export default (form)=>{

    const errors ={}
    const regex1=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{3})+$/ 
    // ^ = empieza con
    // \w= a-zA-Z0-9_
    // + = debe tener uno o mas caracteres 
    // ()* = puede cumplirse cero o mas veces lo que esta dentro de parentesis
    // \ = tiene que tener
    // \.= tiene que tener un punto
    // \w{2,3}= tiene que tener estrictamente de 2 a 3 letras
    // $ = tiene que terminar con eso ultimo
    const regex2= /\w+@(gmail|hotmail|outlook)\.com(\.\w{2,3})*$/ 
    if(!(regex2.test(form.mail))){
        errors.mail = 'Debe ingresar un email válido'
    }
    if(!form.mail){
        errors.mail = 'El campo no puede estar vacío'
    }
    if(form.mail.length>35){
        errors.email = 'El mail está largo'
    }
    if(!(/\d+/.test(form.password))){
        errors.password='La contraseña debe tener al menos un número'
    }
    if(form.password.length<6 || form.password.length>10){
        errors.password='La contraseña debe tener entre 6 y 10 caracteres'
    }
    return errors

}