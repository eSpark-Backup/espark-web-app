import "./App.css";
import AppWraper from "./router";
import { Toaster } from "react-hot-toast";
import { renderToString } from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { useEffect, useState } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(0);
  const helmetContext = {};

  const listenToScroll = () => {
    let heightToHideFrom = 10;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      isVisible && // to limit setting state only the first time
        setIsVisible(winScroll);
    } else {
      setIsVisible(winScroll);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <>
      <HelmetProvider context={helmetContext}>
        <AppWraper />
        <Toaster />
        <div
          class="go-top"
          style={{
            display: isVisible ? "inline" : "none",
            animation: isVisible ? "fadeInRight 1s" : "fade 1s",
          }}
          onClick={() => window.scrollTo(0, 0)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="12" y1="19" x2="12" y2="5"></line>
            <polyline points="5 12 12 5 19 12"></polyline>
          </svg>
        </div>
      </HelmetProvider>
    </>
  );
}

export default App;
