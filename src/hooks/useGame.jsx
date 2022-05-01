import { useContext } from 'react'
import GameContext from '../context/GamesProvider'

const useGame = () => {
   return useContext(GameContext)
}

export default useGame