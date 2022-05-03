// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
import Header from "./layouts/Header";

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
