import React, { useState, useEffect } from 'react';
import messages from './utils/messages.js';
import speakerIcon from './assets/speaker.svg';
import pauseIcon from './assets/pause.svg'; 
import confetti from 'canvas-confetti';

//  function to translate the footer msg
const footerMessages = {
  en: (name) => `We wish ${name} a blissful Ramadan 💖🌙`,
  ar: (name) => `نتمنى لـ ${name} رمضانًا مباركًا 💖🌙`,
  fr: (name) => `Nous souhaitons à ${name} un Ramadan béni 💖🌙`,
  ful: (name) => `Aɗaɗo ${name} yunai Ramadan Kareem 💖🌙`,
};

const App = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [language, setLanguage] = useState('en');
  const [greeting, setGreeting] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Dynamic footer wish
  const personalWish = (footerMessages[language] || footerMessages.en)(name || 'Friend');

  // funtion to clear the input fields
  const clearAll = () => {
    setName('');
    setAge('');
    setGreeting('');
    setIsSpeaking(false);
    window.speechSynthesis.cancel();
  };

  // Generate ramadan greeting based on the input age && language selected
  const handleSubmit = () => {
    const numericAge = parseInt(age);
    if (!numericAge || !messages[language]) return;

    const ageKeys = Object.keys(messages[language]).map(Number);
    const closest = ageKeys.reduce((prev, curr) =>
      Math.abs(curr - numericAge) < Math.abs(prev - numericAge) ? curr : prev
    );

    const selectedMessage = messages[language][closest.toString()];
    setGreeting(selectedMessage);
    confetti();
  };

  // function to pause && toggle the speaker buttn
  const toggleSpeak = () => {
    if (!greeting) return;
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      const utterance = new SpeechSynthesisUtterance(`${greeting}. ${personalWish}`);
      utterance.lang =
        language === 'ar' ? 'ar-SA' :
        language === 'fr' ? 'fr-FR' :
        language === 'ful' ? 'ff-NG' : 'en-US';
      utterance.onend = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };

  // function to select theme
  useEffect(() => {
    const root = document.documentElement;
    darkMode ? root.classList.add('dark') : root.classList.remove('dark');
  }, [darkMode]);

  return (
    <div className={`min-h-screen flex flex-col items-center p-6 transition-colors duration-300 ${darkMode ? 'bg-gradient-to-br from-slate-800 to-slate-900 text-white' : 'bg-gradient-to-br from-blue-50 to-blue-200 text-blue-900'}`}>
     
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="self-end mb-4 px-3 py-1 rounded-full border border-current hover:bg-current hover:text-white transition-colors text-sm"
      >
        {darkMode ? '☀️ Light' : '🌙 Dark'}
      </button>

      <div className="w-full max-w-md bg-white dark:bg-slate-800 dark:text-white rounded-xl shadow-lg p-6 text-center animate-fade-in-up">
        <h1 className="text-3xl font-bold mb-6">🌙 Ramadan Greeting Generator</h1>

        <div className="flex flex-col gap-3 mb-6">
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 rounded border border-blue-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-slate-700"
          />
          <input
            type="number"
            placeholder="Enter your age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="p-2 rounded border border-blue-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-slate-700"
          />
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="p-2 rounded border border-blue-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-slate-700"
          >
            <option value="en">English</option>
            <option value="ar">Arabic</option>
            <option value="fr">French</option>
            <option value="ful">Fulani</option>
          </select>

          <div className="flex gap-3">
            <button
              onClick={handleSubmit}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded shadow"
            >
              Generate
            </button>
            <button
              onClick={clearAll}
              className="flex-1 bg-gray-300 hover:bg-gray-400 dark:bg-slate-600 dark:hover:bg-slate-500 text-gray-900 dark:text-white font-semibold py-2 rounded shadow"
            >
              Clear
            </button>
          </div>
        </div>

        {/* Greeting card */}
        {greeting && (
          <div className="bg-blue-50 dark:bg-slate-700 p-4 rounded-xl shadow-inner animate-fade-in">
            <p className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-4">{greeting}</p>
            <button
              onClick={toggleSpeak}
              className="inline-flex items-center justify-center w-10 h-10 bg-blue-100 dark:bg-slate-600 rounded-full hover:bg-blue-200 dark:hover:bg-slate-500"
            >
              <img src={isSpeaking ? pauseIcon : speakerIcon} alt="Speak" className="w-5 h-5" />
            </button>
            <p className="mt-4 text-sm text-blue-600 dark:text-blue-300">
              {personalWish}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
