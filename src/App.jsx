import AppSeguro from './components/AppSeguro';
import { GameProvider } from './context/GamesProvider'

const App = () => {
  return (
    <>
      <GameProvider>
        <AppSeguro />
      </GameProvider>

    </>
  );
};

export default App;