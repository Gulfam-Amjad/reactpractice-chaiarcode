import { useState, useEffect } from 'react';
import './App.css';
import { ThemeProvider } from './contexts/Context'; // ✅ lowercase
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';

function App() {
  const [thememode, setthememode] = useState("light");

  const lightmode = () => "light";
  const darkmode = () => "dark";

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(thememode);
  }, [thememode]);

  // ✅ ✅ ✅ THIS WAS MISSING IN YOUR CASE
  return (
    <ThemeProvider value={{ thememode, lightmode, darkmode, setthememode }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
