import { createContext, useContext, useEffect, useState } from "react";
import initialConfigurations from "../data/data";

const ConfigContext = createContext(null);

export function ConfigProvider({ children }) {
  const [configurations, setConfigurations] = useState(() => {
    const saved = localStorage.getItem("configurations");
    return saved ? JSON.parse(saved) : initialConfigurations;
  });

  useEffect(() => {
    localStorage.setItem("configurations", JSON.stringify(configurations));
  }, [configurations]);

  return (
    <ConfigContext.Provider value={{ configurations, setConfigurations }}>
      {children}
    </ConfigContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useConfig() {
  const context = useContext(ConfigContext);

  if (!context) {
    throw new Error("useConfig must be used within a ConfigProvider");
  }

  return context;
}
