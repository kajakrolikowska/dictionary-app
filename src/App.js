import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="AppWrap">
        <div className="AppContainer">
          <h1>Dictionary</h1>
        </div>
        <footer>
          This app was coded by Kaja Królikowska, and it is open-sourced on{" "}
          <a
            href="https://github.com/kajakrolikowska/dictionary-app"
            alt="Github repository"
            taret="_blank"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a href="/" alt="Netlify link" target="_blank">
            Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}

export default App;
