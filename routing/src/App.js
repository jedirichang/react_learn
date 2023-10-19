import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ProductPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetail from "./pages/ProductDetails";

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <RootLayout />,
    children: [{
      path: '/',
      element: <Home />,
    },
    {
      path: '/products',
      element: <ProductPage />,
    },
    {
      path: '/products/:productId',
      element: <ProductDetail />
    }
    ],
  }
])
function App() {
  return <RouterProvider router={router} />;
}

export default App;
