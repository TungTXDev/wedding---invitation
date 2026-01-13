import { useState } from 'react'
import Home from './components/Home'
import SelectSide from './components/SelectSide'
import AnimationIntro from './components/AnimationIntro'
import MusicPlayer from './components/MusicPlayer'
import './App.css'

function App() {
  const [selectedSide, setSelectedSide] = useState(null)
  const [showAnimation, setShowAnimation] = useState(true)

  const handleBack = () => {
    setSelectedSide(null)
  }

  const handleAnimationComplete = () => {
    setShowAnimation(false)
  }

  return (
    <>
      <MusicPlayer />
      {showAnimation ? (
        <AnimationIntro onComplete={handleAnimationComplete} />
      ) : !selectedSide ? (
        <SelectSide onSelect={setSelectedSide} />
      ) : (
        <Home selectedSide={selectedSide} onBack={handleBack} />
      )}
    </>
  )
}

export default App
