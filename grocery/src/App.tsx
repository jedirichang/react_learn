import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authentication from "./pages/Authentication";
import Login from "./components/Login";
import Signup from "./components/Signup";
import GlobalStyles from "./styles/GlobalStyles";
import { Navigate } from "../node_modules/react-router-dom/dist/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "./store/store";
import Dashboard from "./pages/Dashboard";
function App() {
  return (
    <>
      <GlobalStyles />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme="light"
      />
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Navigate to="/auth" />} />
            <Route path="/auth" element={<Authentication />}>
              <Route index element={<Signup />} />
              <Route path="login" element={<Login />} />
            </Route>
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
