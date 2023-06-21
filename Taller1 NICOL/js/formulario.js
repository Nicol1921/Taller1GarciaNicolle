//Reglas de validación 

const number=/^[0-9]{1,15}$/
const text=/[a-z, A-Z, á,Á,ñ,é,ú ]{10,50}/
let flag

//Acceder a los elementos que se van alterar
const form=document.getElementById ("frmvalidacion")
console.log(form)
//const form=document.querySelector("frmvalidacion")

const noDoc=form.noDoc.value

//Acceder al FeedBack 

const f1=document.querySelector("#camponoDoc .feedback")

//validacion de DoDocumento
form.noDoc.addEventListener('input', (e)=>{
    e.preventDefault()

//console.log(e.target)

//console.log("Se está escribiendo sobre el input")

    if(number.test(e.target.value)){
        //Regla de validación
        form.noDoc.setAttribute("class","success")
        f1.style.setProperty("visibility", "hidden")
        f1.style.setProperty("opacity", "0")
        flag=true
        

    }
    else{
        //Regla NO pasa la validación
    form.noDoc.setAttribute("class","error")
    f1.textContent="Solo puede digitar valores númericos con una longitud mínimo de 1 caracter máximo 15"
    f1.style.setProperty("visibility", "visible")
    f1.style.setProperty("opacity", "1")
    flag=false
    }

})

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    if(form.noDoc.value==null || form.noDoc.value==0 || flag==false ){
    alert("Debe ingresar un número de documento")
    form.noDoc.focus()
    form.noDoc.setAttribute("class","error")


}
else{

        form.submit()
    }
    

})




//REGLAS PARA NOMBRE 

const number1=/\w[a-z, A-Z, á,Á,ñ,é,ú ]{0,12}/
const text1=/\W[a-z, A-Z, á,Á,ñ,é,ú ]{10,50}/
let flag1

//Acceder a los elementos que se van alterar
const form1=document.getElementById("frmvalidacion")
console.log(form1)
//const form1=document.querySelector("frmvalidacion")

const nombre=form1.nombre.value

//Acceder al FeedBack 

const f2=document.querySelector("#campoNombre .feedback")

//validacion de DoDocumento
form1.nombre.addEventListener('input', (e)=>{
    e.preventDefault()

//console.log(e.target)

//console.log("Se está escribiendo sobre el input")

    if(number1.test(e.target.value)){

        //Regla de validación
        form1.nombre.setAttribute("class","success")
        f2.style.setProperty("visibility", "hidden")
        f2.style.setProperty("opacity", "0")
        flag=true
        

    }
    else{
        //Regla NO pasa la validación
    form1.nombre.setAttribute("class","error")
    f2.textContent="En este espacio solo se puede digitar caracteres alfanuméricos."
    f2.style.setProperty("visibility", "visible")
    f2.style.setProperty("opacity", "1")
    flag=false
    }

})

form1.addEventListener("submit",(e)=>{
    e.preventDefault()

    if(form1.nombre.value==null || form1.nombre.value==0 || flag==false ){
    alert("Debe ingresar un número de documento")
    form1.nombre.focus()
    form1.nombre.setAttribute("class","error")


}
else{

        form1.submit()
    }
    

})



//REGLAS PARA APELLIDO
 
const number2=/\w[a-z, A-Z, á,Á,ñ,é,ú ]{0,12}/
const text2=/\W[a-z, A-Z, á,Á,ñ,é,ú ]{10,50}/
let flag2

//Acceder a los elementos que se van alterar
const form2=document.getElementById("frmvalidacion")
console.log(form2)
//const form2=document.querySelector("frmvalidacion")

const apellido=form2.apellido.value

//Acceder al FeedBack 

const f3=document.querySelector("#campoApellido .feedback")

//validacion de DoDocumento
form2.apellido.addEventListener('input', (e)=>{
    e.preventDefault()

//console.log(e.target)

//console.log("Se está escribiendo sobre el input")

    if(number2.test(e.target.value)){

        //Regla de validación
        form2.apellido.setAttribute("class","success")
        f2.style.setProperty("visibility", "hidden")
        f2.style.setProperty("opacity", "0")
        flag=true
        

    }
    else{
        //Regla NO pasa la validación
    form2.apellido.setAttribute("class","error")
    f2.textContent="En este espacio solo se puede digitar caracteres alfanuméricos."
    f2.style.setProperty("visibility", "visible")
    f2.style.setProperty("opacity", "1")
    flag=false
    }

})

form2.addEventListener("submit",(e)=>{
    e.preventDefault()

    if(form2.apellido.value==null || form2.apellido.value==0 || flag==false ){
    alert("Debe ingresar un número de documento")
    form2.apellido.focus()
    form2.apellido.setAttribute("class","error")


}
else{

        form2.submit()
    }
    

})


// REGLAS PARA FECHA DE NACIMIENTO 

  // Acceder a los elementos que se van a alterar
const form4 = document.getElementById("frmvalidacion");
console.log(form4);

// Acceder al Feedback
const f5 = document.querySelector("#campoFechaNacimiento .feedback"); 

// Validación de fecha de nacimiento
const fechaLimite= new Date("01-01-2002"); 

form4.fechaNacimiento1.addEventListener('input', (e) => {
    

    const fechaIngresada = new Date(e.target.value);

    if (fechaIngresada>fechaLimite) {
        form4.fechaNacimiento1.setAttribute("class", "error") 
      f5.textContent = "Debes ser mayor de 18 años para registrarte"
      f5.style.setProperty("visibility", "visible")
      f5.style.setProperty("opacity", "1")
    } else {
      form4.fechaNacimiento1.setAttribute("class", "success")
      f5.style.setProperty("visibility", "hidden")
      f5.style.setProperty("opacity", "0")
    }
  });

    

form4.addEventListener("submit", (e) => {
    e.preventDefault();

    if (form4.fechaNacimiento1.value == null || form4.fechaNacimiento1.value == 0 ) {
        alert("Debe ingresar su fecha de nacimiento");
        form4.fechaNacimiento1.focus();
        form4.fechaNacimiento1.setAttribute("class", "error");
    } else {
        form4.submit();
    }
});


//REGLAS PARA EL EMAIL

const text4=/^[a-zA-Z0-9._%+-]+@misena\.edu\.co$/
let flag3

//Acceder a los elementos que se van alterar
const form3=document.getElementById("frmvalidacion")
console.log(form3)
//const form3=document.querySelector("frmvalidacion")

const email=form3.email.value

//Acceder al FeedBack 

const f4=document.querySelector("#campoCorreo .feedback")

//validacion de CORREO ELECTRONICO
form3.email.addEventListener('input', (e)=>{
    e.preventDefault()

//console.log(e.target)

//console.log("Se está escribiendo sobre el input")

    if(text4.test(e.target.value)){

        //Regla de validación
        form3.email.setAttribute("class","success")
        f4.style.setProperty("visibility", "hidden")
        f4.style.setProperty("opacity", "0")
        flag=true
        

    }
    else{
        //Regla NO pasa la validación
    form3.email.setAttribute("class","error")
    f4.textContent="El correo electrónico debe tener el formato correcto (ejemplo@misena.edu.co)."
    f4.style.setProperty("visibility", "visible")
    f4.style.setProperty("opacity", "1")
    flag=false
    }

})

form3.addEventListener("submit",(e)=>{
    e.preventDefault()

    if(form3.email.value==null || form3.email.value==0 || flag==false ){
    alert("Debe ingresar un correo electrónico,¡por favor!")
    form3.email.focus()
    form3.email.setAttribute("class","error")


}
else{

        form3.submit()
    }
    

})



// REGLAS PARA LA CONTRASEÑA 
const password1=/^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])(?=.*[!@#$%^&*])(?=.{10,}).*$/


// Acceder a los elementos que se van a alterar
const form5 = document.getElementById("frmvalidacion");
console.log(form5);


// Acceder al Feedback
const f6 = document.querySelector("#campoPassword .feedback"); 

const password=form5.password.value

// Validación deL password 

form5.password.addEventListener('input', (e)=>{

//console.log("Se está escribiendo sobre el input")

    if(password1.test(e.target.value)){

        //Regla de validación
        form5.password.setAttribute("class","success")
        f6.style.setProperty("visibility", "hidden")
        f6.style.setProperty("opacity", "0")
        flag=true
        

    }
    else{
        //Regla NO pasa la validación
    form5.password.setAttribute("class","error")
    f6.textContent="Se puede incluir mínimo una letra mayúscula, un número, una letra minúscula, un carácter y debe ser mínimo de 10 caracteres."
    f6.style.setProperty("visibility", "visible")
    f6.style.setProperty("opacity", "1")
    flag=false
    }

})

form5.addEventListener("submit",(e)=>{
    e.preventDefault()

    if(form5.password.value==null || form5.password.value==0 || flag==false ){
    alert("Debe ingresar una contraseña")
    form5.password.focus()
    form5.password.setAttribute("class","error")


}
else{

        form5.submit()
    }
    

})


//REGLAS PARA LA COMPROBACIÓN DE CONTRASEÑA 



// Acceder a los elementos que se van a alterar
const form6 = document.getElementById("frmvalidacion");
console.log(form6);


// Acceder al Feedback
const f7 = document.querySelector("#campoConfirmPassword .feedback"); 

const confirmPassword=form6.confirmPassword.value


// Validación de la comprobacion de la password 

form6.confirmPassword.addEventListener('input', (e)=>{

    const confirmPassword=form6.confirmPassword.value
    const password=form5.password.value
    

//console.log("Se está escribiendo sobre el input")

    if(confirmPassword == password){

        //Regla de validación
        form6.confirmPassword.setAttribute("class","success")
        f7.style.setProperty("visibility", "hidden")
        f7.style.setProperty("opacity", "0")
        flag=true
        

    }
    else{
        //Regla NO pasa la validación
    form6.confirmPassword.setAttribute("class","error")
    f7.textContent="Comprobar que el password digitado y su confirmación son iguales."
    f7.style.setProperty("visibility", "visible")
    f7.style.setProperty("opacity", "1")
    flag=false
    }

})

form6.addEventListener("submit",(e)=>{
    e.preventDefault()

    if(form6.confirmPassword.value==null || form6.confirmPassword.value==0 || flag==false ){
    alert("Las contraseñas deben coincidir")
    form6.confirmPassword.focus()
    form6.confirmPassword.setAttribute("class","error")


}
else{

        form6.submit()
    }
    

})

// REGLAS PARA LA VENTANA MODAL 
 
// Crear variable para abrir el  modal

let openVentanaModal=document.querySelector("#aceptarTerminos")
let mostrarVentanaModal=document.querySelector(".modal") 
let cerrarVentanaModal=document.querySelector(".close")

// Funciones

openVentanaModal.addEventListener("input",()=>{
  mostrarVentanaModal.style.display="block"


})

cerrarVentanaModal.addEventListener("click",()=>{
  mostrarVentanaModal.style.display="none"
})

let acpetarTerminos=document.querySelector("#btncal")

//FUNCIÓN PARA ACEPTAR LOS TÉRMINOS 

acpetarTerminos.addEventListener("click",()=>{
  mostrarVentanaModal.style.display="none"
})
