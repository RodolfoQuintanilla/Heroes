
import { useState, createContext, useEffect } from 'react';


const GameContext = createContext()

const GameProvider = ({ children }) => {


   const [datos, setDatos] = useState([]);
   const [id, setId] = useState(0);
   const [perfil, setPerfil] = useState([]);


   useEffect(() => {
      if (id !== 0) {
         const consultaApi2 = async () => {

            const url = `https://akabab.github.io/superhero-api/api/id/${id}.json`

            try {
               const respuesta = await fetch(url)
               const resultado = await respuesta.json()
               setPerfil(resultado);
            } catch (error) {
               console.log(error);
            }
         }
         consultaApi2()
         return
      } else {
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
      }
   }, [id]);





   return (
      <GameContext.Provider
         value={{
            datos,
            setId,
            perfil,
            setPerfil
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
