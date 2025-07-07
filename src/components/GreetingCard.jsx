import React, { useState } from 'react'
import messages from '../utils/messages'
import confetti from 'canvas-confetti'
import speaker from '../assets/speaker.svg'

const GreetingCard = ({ language }) => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [greeting, setGreeting] = useState('')

  const handleSubmit = () => {
    const numericAge = parseInt(age)
    const ranges = Object.keys(messages[language])
    const closest = ranges.reduce((prev, curr) => (
      Math.abs(curr - numericAge) < Math.abs(prev - numericAge) ? curr : prev
    ))
    const msg = messages[language][closest]

    setGreeting(msg)
    confetti()
  }

  const speakGreeting = () => {
    const utterance = new SpeechSynthesisUtterance(greeting)
    utterance.lang = language === 'ar' ? 'ar-SA'
                    : language === 'fr' ? 'fr-FR'
                    : language === 'ful' ? 'ff-NG'
                    : 'en-US'
    window.speechSynthesis.speak(utterance)
  }

  return (
    <div className="card">
      <h2>Enter your name and age</h2>
      <div className="form">
        <input type="text" placeholder="Name" onChange={e => setName(e.target.value)} />
        <input type="number" placeholder="Age" onChange={e => setAge(e.target.value)} />
        <button onClick={handleSubmit}>Submit</button>
      </div>

      {greeting && (
        <div className="greeting-section">
          <p className="greeting-text animate">{greeting}</p>
          <img
            src={speaker}
            alt="speaker"
            className="speaker-icon"
            onClick={speakGreeting}
          />
          <p className="name-line">We wish <strong>{name}</strong> a blissful Ramadan 💖🌙</p>
        </div>
      )}
    </div>
  )
}

export default GreetingCard
