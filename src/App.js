import "./App.css";
import LayoutOne from "./layout/layoutOne";
import AppWraper from "./router";

function App() {
  return (
    <>
      <LayoutOne>
        <AppWraper />
      </LayoutOne>
    </>
  );
}

export default App;
