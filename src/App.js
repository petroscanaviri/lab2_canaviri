import './App.css';
import { Boton } from './componentes/boton';
import { Contador } from './componentes/contador';
import { useEffect, useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);
  const [numClicsID, setNumClicsID] = useState(0);
  const [inicioTemporizador, setInicioTemporizador] = useState(false);
  console.log(inicioTemporizador);
  const sumarClic = () => {
    setNumClics(numClics + 1);
  }

  const restarClic = () => {
    setNumClics(numClics - 1);
  }

  const encender = () => {
    setInicioTemporizador(true);
  }

  const apagar = () => {
    setInicioTemporizador(false);
  }

  useEffect (() => {
    let intervaloID = null;
    if (inicioTemporizador) {
      intervaloID = setInterval(() => {
        setNumClics(i => i += 1);
      }, 1000); 
      setNumClicsID(intervaloID);
    } else {
      clearInterval(numClicsID);
    }
  }, [inicioTemporizador]);

  return (
    <div className='App'>
      <div>
        <Contador numClics={numClics} />
        <Boton 
          texto='Aumentar +'
          manejarClic={sumarClic} />
        <Boton 
          texto='Disminuir -'
          manejarClic={restarClic} />
          
      </div>
      <div>
      <Boton 
          texto='Activar Temporizador'
          manejarClic={encender} />
      <Boton 
          texto='Desactivar Temporizador'
          manejarClic={apagar} />
      </div>
    </div>
  );
  
}

export default App;
