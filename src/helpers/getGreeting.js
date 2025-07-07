export default function getGreeting(name, ageInput, lang = 'en') {
  const age = Number(ageInput);
  const translations = {
    en: name => `We wish ${name} a very Blissful Ramadan Kareem! 💖🌙`,
    ar: name => `نتمنى لـ ${name} رمضان كريم مليء بالبركات! 💖🌙`,
    fr: name => `Nous souhaitons à ${name} un excellent Ramadan Kareem! 💖🌙`,
    ful: name => `Aɗaɗo ${name} jooni Ramadan Kareem! 💖🌙`,
  };

  const fallback = `🌙 Ramadan Kareem! May this holy month bring you peace, prosperity, and endless blessings.`;
  const wish = translations[lang]?.(name) || translations.en(name);

  let msg = fallback;

  switch (true) {
    case age >= 1 && age <= 15:
      msg = "May your Ramadan be filled with hope, kindness, and generosity. 🌙💕";
      break;
    case age >= 16 && age <= 17:
      msg = "🌙 Ramadan Mubarak! May this holy month bring you peace, prosperity, and endless blessings. 🤲✨";
      break;
    case age > 17 && age < 19:
      msg = "May your fasts be easy, your prayers be accepted, and your heart be filled with faith. 💖🌙";
      break;
    case age >= 19 && age <= 21:
      msg = "🕋 May the spirit of Ramadan illuminate your heart and home. 🌟🤲";
      break;
    case age >= 22 && age <= 24:
      msg = "💫 Sending warm wishes for a blessed Ramadan! 🌙🤍";
      break;
    case age === 25:
      msg = "🤲 May your prayers be powerful, your faith strong, and your heart content. 🌟🕌";
      break;
    case age === 26:
      msg = "🕋🌟 May Allah accept your fasting and good deeds. Ramadan Mubarak! 🕋🤲";
      break;
    case age === 27:
      msg = "🕋 May the spirit of Ramadan bring love, kindness, and peace. 🌟🤲";
      break;
    case age === 28:
      msg = "🕋 Ramadan Mubarak! May this month bring purification and light. 🌟🤲";
      break;
    case age === 29:
      msg = "🕋 May your heart be filled with the light of Imaan. 🌟🤲";
      break;
    case age === 30:
      msg = "🕋May Allah grant you strength and patience this Ramadan. 🌟🤲";
      break;
    case age === 31:
      msg = "🕋 May you and your loved ones enjoy a joyous, spiritual Ramadan. 🌟🤲";
      break;
    case age === 32:
      msg = "🕋 May this Ramadan bring you closer to Allah’s mercy. 🌟🤲";
      break;
    case age === 33:
      msg = "🕋 May Ramadan inspire kindness, compassion, and generosity. 🌟🤲";
      break;
    case age === 34:
      msg = "May this holy month cleanse your heart and bring eternal joy. 🤲";
      break;
    case age >= 35 && age <= 40:
      msg = "🕋 May Ramadan transform your heart and lead to righteousness. 🌟🤲";
      break;
    case age >= 45 && age <= 50:
      msg = "🕋 May this Ramadan strengthen your bond with Allah. 🌟🤲";
      break;
    case age >= 51 && age <= 60:
      msg = "🕋May Ramadan fill your life with love, generosity, and kindness. 🌟🤲";
      break;
    case age >= 61:
      msg = "May Allah’s grace be with you now and always during this holy month. 🌟🤲";
      break;
    default:
      msg = fallback;
  }

  return { msg, wish };
}