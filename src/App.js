import "./App.css";
import AppWraper from "./router";
import { Toaster } from "react-hot-toast";
import { HelmetProvider } from "react-helmet-async";
import VisitorQueueTracking from "./VisitorQueueHOC";

function App() {
  const helmetContext = {};

  return (
    <>
      <HelmetProvider context={helmetContext}>
        <AppWraper />
        <Toaster />
      </HelmetProvider>
      <VisitorQueueTracking/>
    </>
  );
}

export default App;
