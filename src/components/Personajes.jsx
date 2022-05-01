import { useState } from 'react';
import useGame from '../hooks/useGame'
import Perfil from './Perfil';


const personajes = () => {

   const { datos } = useGame()

   const [id, setId] = useState(0);
   const informacion = (info) => {
      setId(info);
   }

   return (
      <div>
         <h1>Hola</h1>
         {datos.map(dat => (
            <div key={dat.id} className="div">
               <img src={dat.images.md} />
               <p>{dat.name}  -  -{dat.appearance.gender}</p>
               <button onClick={() => informacion(dat.id)}>Click</button>
            </div>
         ))}

      </div >
   );
};

export default personajes;