import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { ParallaxProvider } from "react-scroll-parallax";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </ThemeProvider>
  );
};

export default App;
