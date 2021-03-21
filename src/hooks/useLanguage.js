import { useState } from "react";

const translations = {
  en: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  pl: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

const isSupported = (language) => {
  const regEx = new RegExp(language, "gi");

  return regEx.test(navigator.language);
};

const getDefaultLanguage = () => {
  const languages = Object.keys(translations);
  const match = languages.find((lang) => isSupported(lang));

  return !!match ? match : "en";
};

const useLanguage = () => {
  return useState(getDefaultLanguage());
};

export default useLanguage;