import React from "react";
import { useState } from "react";


const Contact = () => {
  const [fullName, changeFullName] = useState({input: '', valido: null});
  const [email, changeEmail] = useState({input: '', valido: null});
  const [okForm, changeokForm] = useState(null);
  const onChange = (e) =>{
    changeFullName({...fullName, input: e.target.value})
  }
  const onChange2 = (e) =>{
    changeEmail({...email, input: e.target.value})
  }
  const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, 
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
  }
  const validacion = () =>{
    if(expresiones.nombre.test(fullName.input)){
      changeFullName({...fullName, valido: 'true'})
    } else {
      changeFullName({...fullName, valido: 'false'})

    }
  }
  const validacion2 = () =>{
    if(expresiones.correo.test(email.input)){
      changeEmail({...email, valido: 'true'})
    } else {
      changeEmail({...email, valido: 'false'})
    }
  }
  const onSubmit = (e) =>{
    e.preventDefault();
    if(email.valido === 'true' && fullName.valido === 'true'){
      changeokForm(true)
      let validacionTrue = document.getElementById("validacionVerdadera");
      let validacionFalse = document.getElementById("validacionFalsa");
      validacionFalse.innerHTML = "";
      validacionTrue.innerHTML = "We will contact you shortly 📨" + fullName.input;
    } else {
      changeokForm(false)
      let validacionFalse = document.getElementById("validacionFalsa");
      validacionFalse.innerHTML = "Invalid Name or E-mail Address ⚠️";
      let validacionTrue = document.getElementById("validacionVerdadera");
      validacionTrue.innerHTML = "";
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
          <h2>Want to know more?</h2>
          <p>Send us your questions and we will contact you</p>
          <input type="text" placeholder="First & Last Name" value={fullName.input} onChange={onChange} onKeyUp={validacion} onBlur={validacion}/>
          <input type="email" placeholder="E-mail" value={email.input} onChange={onChange2} onKeyUp={validacion2} onBlur={validacion2}/>
          <button type="submit" >Submit</button>
      </form>
      <div id="validacionFalsa"></div>
      <div id="validacionVerdadera"></div>
    </div>
  );
};

export default Contact;