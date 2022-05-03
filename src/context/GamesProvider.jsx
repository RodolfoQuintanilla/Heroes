import axios from 'axios';
import { useState, createContext } from 'react';

const GameContext = createContext()

const GameProvider = ({ children }) => {


   const [datos, setDatos] = useState([]);
   const [id, setId] = useState(0);

   const consultaApi = async () => {

      const url = 'https://akabab.github.io/superhero-api/api/all.json'

      try {
         const respuesta = await fetch(url)
         const resultado = await respuesta.json()
         setDatos(resultado);
      } catch (error) {
         console.log(error);
      }


   }
   consultaApi()


   return (
      <GameContext.Provider
         value={{
            datos,
            setId
         }}
      >
         {children}
      </GameContext.Provider>
   )

}

export {
   GameProvider
}

export default GameContext
