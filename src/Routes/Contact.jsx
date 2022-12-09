import React from "react";
import { useState } from "react";


const Contact = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [fullName, cambiarNombreCompleto] = useState({campo: '', valido: null});
  const [email, cambiarEmail] = useState({campo: '', valido: null});
  const [formularioValido, cambiarFormularioValido] = useState(null);
  const onChange = (e) =>{
    cambiarNombreCompleto({...fullName, campo: e.target.value})
  }
  const onChange2 = (e) =>{
    cambiarEmail({...email, campo: e.target.value})
  }
  const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  }
  const validacion = () =>{
    if(expresiones.nombre.test(fullName.campo)){
      cambiarNombreCompleto({...fullName, valido: 'true'})
    } else {
      cambiarNombreCompleto({...fullName, valido: 'false'})

    }
  }
  const validacion2 = () =>{
    if(expresiones.correo.test(email.campo)){
      cambiarEmail({...email, valido: 'true'})
    } else {
      cambiarEmail({...email, valido: 'false'})
    }
  }
  const onSubmit = (e) =>{
    e.preventDefault();
    if(email.valido === 'true' && fullName.valido === 'true'){
      cambiarFormularioValido(true)
      let validacionTrue = document.getElementById("validacionVerdadera");
      let validacionFalse = document.getElementById("validacionFalsa");
      validacionFalse.innerHTML = "";
      validacionTrue.innerHTML = "<p>Gracias " + fullName.campo + ", te contactaremos cuanto antes via mail. </p>";
    } else {
      cambiarFormularioValido(false)
      let validacionFalse = document.getElementById("validacionFalsa");
      validacionFalse.innerHTML = "Invalid E-mail address ⚠️";
      let validacionTrue = document.getElementById("validacionVerdadera");
      validacionTrue.innerHTML = "";
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
          <label htmlFor="nombreApellido"></label>
          <h2>Want to know more?</h2>
          <p>Send us your questions and we will contact you</p>
          <input 
            type="text" 
            id="nombreApellido" 
            placeholder="First & Last Name" 
            value={fullName.campo} 
            onChange={onChange}
            onKeyUp={validacion}
            onBlur={validacion}
          />
          <label htmlFor="email"></label>
          <input 
            type="email" 
            id="email" 
            placeholder="E-mail" 
            value={email.campo} 
            onChange={onChange2}
            onKeyUp={validacion2}
            onBlur={validacion2}
          />
          <button type="submit" >Submit</button>
      </form>
      <div id="validacionFalsa"></div>
      <div id="validacionVerdadera"></div>
    </div>
  );
};

export default Contact;