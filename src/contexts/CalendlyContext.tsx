import { createContext, useContext, useState, ReactNode } from 'react';

interface CalendlyContextType {
  isOpen: boolean;
  openCalendly: () => void;
  closeCalendly: () => void;
}

const CalendlyContext = createContext<CalendlyContextType>({
  isOpen: false,
  openCalendly: () => {},
  closeCalendly: () => {},
});

export function CalendlyProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CalendlyContext.Provider
      value={{
        isOpen,
        openCalendly: () => setIsOpen(true),
        closeCalendly: () => setIsOpen(false),
      }}
    >
      {children}
    </CalendlyContext.Provider>
  );
}

export const useCalendly = () => useContext(CalendlyContext);
