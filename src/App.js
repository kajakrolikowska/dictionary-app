import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="AppWrap">
        <div className="AppContainer">
          <h1>Dictionary</h1>
          <h2>Let's check the definition of:</h2>
          <Dictionary />
        </div>
        <footer>
          This app was coded by Kaja Królikowska, and it is open-sourced on{" "}
          <a
            href="https://github.com/kajakrolikowska/dictionary-app"
            alt="Github repository"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://astonishing-sherbet-6d2881.netlify.app/"
            alt="Netlify link"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}

export default App;
