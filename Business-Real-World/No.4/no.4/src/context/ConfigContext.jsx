import { createContext, useContext, useEffect, useState } from "react";

const ConfigContext = createContext(null);

const initialConfiguration = {
  institutionName: "Scholarly Canvas University",
  academicYear: "2026-2027",
  primaryDomain: "Digital Learning & Research",
  administrativeContact: "admin@scholarlycanvas.edu",
  regulatoryFramework: "Higher Education Standard A1",
  auditInterval: "Annual Review",
  configurationOverviewNotes:
    "Institution-wide academic and compliance configuration for the current cycle.",
};

export function ConfigProvider({ children }) {
  const [configuration, setConfiguration] = useState(() => {
    const saved = localStorage.getItem("config");
    return saved ? JSON.parse(saved) : initialConfiguration;
  });

  useEffect(() => {
    localStorage.setItem("config", JSON.stringify(configuration));
  }, [configuration]);
  return (
    <ConfigContext.Provider value={{ configuration, setConfiguration }}>
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
