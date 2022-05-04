import { useState } from 'react';
import useGame from '../hooks/useGame'
import Perfil from './Perfil';


const personajes = () => {

   const { datos, setId } = useGame()


   const informacion = (info) => {
      setId(info);
   }


   return (
      <div className="container">
         {
            datos.map(dat => (
               <div key={dat.id} className=" contaner__cart">

                  <img className="container__img" src={dat.images.md} alt={dat.name} />

                  <div className="container__peronaje">
                     <h1 container__h1> {dat.name} </h1>
                     <p className="container__data">
                        <span className="container__data__texto">{dat.appearance.gender}</span>
                        <span className="container__data__texto">{dat.biography.alignment}</span>
                        <span className="container__data__texto">{dat.appearance.race}</span>
                     </p>
                     <button className="container__button" onClick={() => informacion(dat.id)}>Ver Mas  </button>
                  </div>

               </div>
            ))
         }

      </div >
   );
};

export default personajes;