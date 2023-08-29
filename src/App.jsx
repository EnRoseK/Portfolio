// Components
import {
  Header,
  Hero,
  About,
  Skills,
  Experience,
  Contact,
  Footer,
} from "./components";

import { useEffect, useState } from "react";
import { LoadingSpinner } from "./components/common";
import { useThemeContext } from "./hooks/useThemeContext";

function App() {
  const [loading, setLoading] = useState(true);
  const { theme } = useThemeContext();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className={`site-container ${theme}`}>
      {loading && <LoadingSpinner />}
      {!loading && (
        <div className={`site-body`}>
          <Header />
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Contact />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
