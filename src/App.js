import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="left-side"></div>
      <div className="right-side">
        <div className="right-inner">
          <h1>Welcome</h1>
          <div className="inputs">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
          </div>
          <button>Sign In</button>
        </div>
      </div>
    </div>
  );
}

export default App;
