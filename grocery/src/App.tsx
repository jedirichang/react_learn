import { BrowserRouter, Routes, Route } from "react-router-dom"
import Authentication from "./pages/Authentication"
import Login from "./components/Login"
import Signup from "./components/Signup"
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Authentication />}>
          <Route index element={<Signup />} />
          <Route path='login' element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App