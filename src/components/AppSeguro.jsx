import { Route, Routes } from 'react-router-dom';
import useGame from '../hooks/useGame'
import Nav from './Nav';
import Personajes from './Personajes'
import Inicio from './Inicio'


const AppSeguro = () => {

   return (
      <div>
         <Nav />
         <section >
            <Routes>
               <Route path="/" element={<Inicio />} />
               <Route path="/hero" element={<Personajes />} />
            </Routes>
         </section >
      </div>
   );
};

export default AppSeguro;