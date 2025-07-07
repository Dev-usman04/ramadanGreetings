export default function getGreeting(name, ageInput, lang = 'en') {
  const age = Number(ageInput);

  // function for Name-based general greeting
  const translations = {
    en: name => `We wish ${name} a very Blissful Ramadan Kareem! 💖🌙`,
    ar: name => `نتمنى لـ ${name} رمضان كريم مليء بالبركات! 💖🌙`,
    fr: name => `Nous souhaitons à ${name} un excellent Ramadan Kareem! 💖🌙`,
    ful: name => `Aɗaɗo ${name} jooni Ramadan Kareem! 💖🌙`,
  };

  // function for Age-based message translations
  const ageMessages = {
    en: {
      fallback: "🌙 Ramadan Kareem! May this holy month bring you peace, prosperity, and endless blessings.",
      1: "May your Ramadan be filled with hope, kindness, and generosity. 🌙💕",
      16: "🌙 Ramadan Mubarak! May this holy month bring you peace, prosperity, and endless blessings. 🤲✨",
      18: "May your fasts be easy, your prayers be accepted, and your heart be filled with faith. 💖🌙",
      21: "🕋 May the spirit of Ramadan illuminate your heart and home. 🌟🤲",
      24: "💫 Sending warm wishes for a blessed Ramadan! 🌙🤍",
      25: "🤲 May your prayers be powerful, your faith strong, and your heart content. 🌟🕌",
      26: "🕋🌟 May Allah accept your fasting and good deeds. Ramadan Mubarak! 🕋🤲",
      27: "🕋 May the spirit of Ramadan bring love, kindness, and peace. 🌟🤲",
      28: "🕋 Ramadan Mubarak! May this month bring purification and light. 🌟🤲",
      29: "🕋 May your heart be filled with the light of Imaan. 🌟🤲",
      30: "🕋 May Allah grant you strength and patience this Ramadan. 🌟🤲",
      31: "🕋 May you and your loved ones enjoy a joyous, spiritual Ramadan. 🌟🤲",
      32: "🕋 May this Ramadan bring you closer to Allah’s mercy. 🌟🤲",
      33: "🕋 May Ramadan inspire kindness, compassion, and generosity. 🌟🤲",
      34: "May this holy month cleanse your heart and bring eternal joy. 🤲",
      35: "🕋 May Ramadan transform your heart and lead to righteousness. 🌟🤲",
      45: "🕋 May this Ramadan strengthen your bond with Allah. 🌟🤲",
      51: "🕋 May Ramadan fill your life with love, generosity, and kindness. 🌟🤲",
      61: "May Allah’s grace be with you now and always during this holy month. 🌟🤲",
    },
    ar: {
      fallback: "🌙 رمضان كريم! نسأل الله أن يجعله شهر خير وبركة وسلام.",
      1: "نسأل الله أن يكون رمضانك مليئًا بالأمل واللطف والكرم. 🌙💕",
      16: "🌙 رمضان مبارك! نسأل الله أن يجعله شهرًا مليئًا بالسلام والازدهار. 🤲✨",
      18: "نسأل الله أن يتقبل صيامك وصلاتك ويملأ قلبك بالإيمان. 💖🌙",
      21: "🕋 نسأل الله أن ينير قلبك ومنزلك بنور رمضان. 🌟🤲",
      24: "💫 أرسل أطيب الأمنيات برمضان مبارك! 🌙🤍",
      25: "🤲 نسأل الله أن يجعل دعاءك قويًا وإيمانك راسخًا وقلبك مطمئنًا. 🌟🕌",
      26: "🕋🌟 نسأل الله أن يتقبل صيامك وأعمالك. رمضان مبارك! 🕋🤲",
      27: "🕋 نسأل الله أن يجلب رمضان المحبة والرحمة والسلام. 🌟🤲",
      28: "🕋 رمضان مبارك! نسأل الله أن يطهر القلوب وينيرها. 🌟🤲",
      29: "🕋 نسأل الله أن يملأ قلبك بنور الإيمان. 🌟🤲",
      30: "🕋 نسأل الله أن يمنحك القوة والصبر في هذا الشهر الكريم. 🌟🤲",
      31: "🕋 رمضان سعيد لك ولأحبائك، مليء بالروحانية. 🌟🤲",
      32: "🕋 نسأل الله أن يقربك من رحمته في رمضان. 🌟🤲",
      33: "🕋 نسأل الله أن يلهمك رمضان اللطف والكرم. 🌟🤲",
      34: "نسأل الله أن يطهر قلبك ويملأه بالفرح الأبدي. 🤲",
      35: "🕋 نسأل الله أن يهديك رمضان إلى التقوى والصلاح. 🌟🤲",
      45: "🕋 نسأل الله أن يقوي علاقتك به في هذا الشهر. 🌟🤲",
      51: "🕋 نسأل الله أن يملأ حياتك بالمحبة والعطاء. 🌟🤲",
      61: "نسأل الله أن ترافقك رحمته دائمًا خلال هذا الشهر المبارك. 🌟🤲",
    },
  };

  const wish = translations[lang]?.(name) || translations.en(name);
  const msgs = ageMessages[lang] || ageMessages.en;

  let msg = msgs.fallback;

  switch (true) {
    case age >= 1 && age <= 15:
      msg = msgs[1]; break;
    case age >= 16 && age <= 17:
      msg = msgs[16]; break;
    case age > 17 && age < 19:
      msg = msgs[18]; break;
    case age >= 19 && age <= 21:
      msg = msgs[21]; break;
    case age >= 22 && age <= 24:
      msg = msgs[24]; break;
    case age === 25:
      msg = msgs[25]; break;
    case age === 26:
      msg = msgs[26]; break;
    case age === 27:
      msg = msgs[27]; break;
    case age === 28:
      msg = msgs[28]; break;
    case age === 29:
      msg = msgs[29]; break;
    case age === 30:
      msg = msgs[30]; break;
    case age === 31:
      msg = msgs[31]; break;
    case age === 32:
      msg = msgs[32]; break;
    case age === 33:
      msg = msgs[33]; break;
    case age === 34:
      msg = msgs[34]; break;
    case age >= 35 && age <= 40:
      msg = msgs[35]; break;
    case age >= 45 && age <= 50:
      msg = msgs[45]; break;
    case age >= 51 && age <= 60:
      msg = msgs[51]; break;
    case age >= 61:
      msg = msgs[61]; break;
    default:
      msg = msgs.fallback;
  }

  return { msg, wish };
}
