import React from 'react'

const LanguageSelector = ({ language, setLanguage }) => {
  return (
    <select value={language} onChange={e => setLanguage(e.target.value)}>
      <option value="en">English</option>
      <option value="ar">Arabic</option>
      <option value="fr">French</option>
      <option value="ful">Fulani</option>
    </select>
  )
}

export default LanguageSelector
