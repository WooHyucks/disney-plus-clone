import { Outlet, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import DetailPage from "./pages/DetailPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";


const Layout = () => {
  return(
    <div>
      <Nav />
      <Outlet />
    </div>
  )
}


function App() {
  return (
    <div className="app">
      <Routes>
        <Route>
          <Route path="/" element={<MainPage />} />
          <Route path=":movieId" element={<DetailPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
