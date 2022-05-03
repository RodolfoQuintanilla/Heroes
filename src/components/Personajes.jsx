import { useState } from 'react';
import useGame from '../hooks/useGame'
import Perfil from './Perfil';


const personajes = () => {

   const { datos, setId } = useGame()


   const informacion = (info) => {
      setId(info);
   }


   return (
      <div className="redd">
         {
            datos.map(dat => (
               <div key={dat.id} className=" characters">

                  <img src={dat.images.md} />

                  <div className="peronaje">
                     <h1> {dat.name} </h1>
                     <p> {dat.appearance.gender} --{dat.biography.alignment} -- {dat.appearance.race}</p>
                     <button onClick={() => informacion(dat.id)}>Ver Mas</button>
                  </div>

               </div>
            ))
         }

      </div >
   );
};

export default personajes;