// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
import Header from "./layouts/header/Header";
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

function App(){
  return (
    <Header/>
  )
  /*
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={Home}/>
        <Route path="login" element={Login}/>
        // { { <Route path="*"/> } }
      </Routes>
    </BrowserRouter>
  )*/
}

export default App;
