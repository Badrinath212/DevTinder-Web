
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Body from './Components/Body'
import Login from "./Components/Login";
import { Provider } from "react-redux";
import AppStore from "./Utils/AppStrore";
import Feed from "./Components/Feed";
import Profile from "./Components/Profile";

function App() {

  return (
    <Provider store={AppStore}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/"  element={<Body />}>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/" element={<Feed />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
