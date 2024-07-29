import { createContext, useState } from 'react';

export const IsTechJargonContext = createContext();

export const IsTechJargonProvider = ({ children }) => {

  const [isTechJargon, setIsTechJargon] = useState(false);

  return (
    <IsTechJargonContext.Provider value={{ isTechJargon, setIsTechJargon }}>
      {children}
    </IsTechJargonContext.Provider>
  );
};
