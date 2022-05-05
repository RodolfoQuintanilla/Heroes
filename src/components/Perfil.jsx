import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import useGame from '../hooks/useGame';
import { Line, Circle } from 'rc-progress';

const Perfil = () => {

   const { perfil, setPerfil } = useGame();



   const limpiar = () => {
      setPerfil([])
   }
   return (
      <div>

         {/* <img src={perfil.images.md} alt="" />
         <h1>{perfil.name}</h1> */}



         <button className="container__button" onClick={() => limpiar}>
            <Link to="/hero">regresar</Link>
         </button>
      </div>
   );
};

export default Perfil;