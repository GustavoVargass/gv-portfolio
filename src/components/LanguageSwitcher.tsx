import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

const languages = [
    { code: "en", label: "English", flag: "/flags/en.svg" },
    { code: "fr", label: "Français", flag: "/flags/fr.svg" },
    { code: "pt", label: "Português", flag: "/flags/br.svg" },
  ];
  

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(languages[0]);
  const { i18n } = useTranslation();

  const selectLanguage = (lang: typeof languages[0]) => {
    setSelected(lang);
    i18n.changeLanguage(lang.code); // troca idioma
    setIsOpen(false);
  };

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative inline-block text-left">
      {/* Trigger Button */}
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 rounded bg-gray-800 px-3 py-1.5 text-gray-200 hover:bg-gray-700 transition-colors h-9"

      >
        <img
          src={selected.flag}
          alt={selected.label}
          className="w-5 h-5 rounded-full"
        />
        <ChevronDown size={18} className="text-gray-400" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 rounded-md bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => selectLanguage(lang)}
              className="flex items-center w-full px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
            >
              <img
                src={lang.flag}
                alt={lang.label}
                className="w-5 h-5 rounded-full mr-2"
              />
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
