import { createContext, useContext, useMemo, useState } from "react";

import * as EN from "@/mock/mock_en";
import * as ID from "@/mock/mock_id";
import * as JP from "@/mock/mock_jp";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("EN");

  const data = useMemo(() => {
    switch (lang) {
      case "ID":
        return ID;
      case "JP":
        return JP;
      case "EN":
      default:
        return EN;
    }
  }, [lang]);



  return (
    <LanguageContext.Provider value={{ lang, setLang, data }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
