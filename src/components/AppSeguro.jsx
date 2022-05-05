import { Route, Routes } from 'react-router-dom';
import useGame from '../hooks/useGame'
import Nav from './Nav';
import Personajes from './Personajes'
import Inicio from './Inicio'
import Perfil from './Perfil';


const AppSeguro = () => {

   return (
      <div>
         <Nav />
         <section >
            <Routes>
               <Route path="/" element={<Inicio />} />
               <Route path="/hero" element={<Personajes />} />
               <Route path="/perfil" element={<Perfil />} />
            </Routes>
         </section >
      </div>
   );
};

export default AppSeguro;