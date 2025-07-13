import { createContext, useContext } from "react";

export const Themecontext = createContext({
  thememode: "light",
  lightmode: () => {},
  darkmode: () => {},
  setthememode: () => {}  // ✅ add this for TypeScript or IntelliSense
});

export const ThemeProvider = Themecontext.Provider;

export const Usetheme = () => {
  return useContext(Themecontext);
};
