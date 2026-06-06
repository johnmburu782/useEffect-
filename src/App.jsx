import { useEffect, useState} from 'react'
import Cardgrid from './cardgrid'
import Card from './card'
import ScoreBoard from './scoreBord'


function App() {
  return (
    <div>
      <ScoreBoard />
      <Cardgrid />
      <Card />
      
    </div>
  )
}

export default App