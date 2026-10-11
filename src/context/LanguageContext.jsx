// === CLAUDE CODE START === (replaced static mock imports with async API fetch)
import { createContext, useContext, useState, useEffect } from "react";
import { fetchAllData } from "@/api/cms";

import * as EN from "@/mock/mock_en";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("EN");
  const [data, setData] = useState(EN);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    fetchAllData(lang)
      .then((result) => {
        if (!cancelled) {
          setData(result);
          setError(null);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          console.error("CMS fetch failed, using fallback:", err);
          setError(err);
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, data, loading, error }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
// === CLAUDE CODE END ===
