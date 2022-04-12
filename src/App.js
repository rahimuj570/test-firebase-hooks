import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import Private from "./Components/Private";
import RequireAuth from "./Components/RequireAuth";
import Signup from "./Components/Signup";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Private />
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </>
  );
}

export default App;
