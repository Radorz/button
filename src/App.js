import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from 'react'

function App() {
  const [time, setTime] = useState("")
  const [txt, setTXT] = useState("PUSH")
 const hola = "Hola"
  const tiempo = time;
  const tx=txt 
 function clickbutton()  {
  if (txt=="PUSH"){
   setTime(10);
    setTXT("");
    setTimeout(()=>{
      
      return(speechSynthesis.speak(new SpeechSynthesisUtterance("Wait")));
     
      
    },10000)
  

  }
 
   if (tiempo>0){
    clearTimeout(timeout);
    window.location.reload()
    return(speechSynthesis.speak(new SpeechSynthesisUtterance("!Cancel!")));

   }
  }

 
  const timeout = setTimeout(()=>{
      
    if(tiempo>0){
    setTime(tiempo - 1)
    }else{
      setTXT("PUSH")
      setTime("")
    }
   
    
  },1000)


  return (
    <div className="App">
      <header className="App-header">
      <div className="fletrero">
        <div className="letrero">
          <strong>PUSH BUTTON FOR</strong>
          <br/><i class="fas fa-walking"></i>
        </div>
        </div>
        <button onClick={clickbutton}  className="am" id="bt">
        {tiempo} {tx}</button> 
              
      </header>
    </div>
  
  );

}

export default App;

/*let audio = new Audio("http://soundboard.panictank.net/AIRHORN.mp3")

window.addEventListener('click', () => {
  //audio.currentTime = 0
  //audio.play()
  let click = audio.cloneNode()
  click.play()
})*/

/*let posibleIndice = 0, vocesDisponibles = [];

vocesDisponibles = speechSynthesis.getVoices();
var synth = window.speechSynthesis;
var voices = synth.getVoices();
console.log({ voices })
console.log({ vocesDisponibles })

// Esperar a que el que DOM cargue
document.addEventListener("DOMContentLoaded", () => {

  
  speechSynthesis.speak(new SpeechSynthesisUtterance("20"));
  speechSynthesis.speak(new SpeechSynthesisUtterance("21"));
  speechSynthesis.speak(new SpeechSynthesisUtterance("22"));
  speechSynthesis.speak(new SpeechSynthesisUtterance("23"));
  speechSynthesis.speak(new SpeechSynthesisUtterance("24"));
  speechSynthesis.speak(new SpeechSynthesisUtterance("25"));
  speechSynthesis.speak(new SpeechSynthesisUtterance("Cruza hijo de puta"));
  // Función que pone las voces dentro del select
  

  // Si no existe la API, lo indicamos
  if (!'speechSynthesis' in window) return alert("Lo siento, tu navegador no soporta esta tecnología");

  
  window.addEventListener('click', () => {
   /* let mensaje = new SpeechSynthesisUtterance();
    mensaje.voice= vocesDisponibles[1];  
    mensaje.volume = 1;
    mensaje.rate = 1;
    mensaje.text = "1,2,3,4,5";
    mensaje.pitch = 1;
    // ¡Parla!
    speechSynthesis.speak(mensaje);*/
  
    

  


  /*}
  
  });*/
  
