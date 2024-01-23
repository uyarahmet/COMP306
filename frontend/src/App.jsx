// react-router-tools
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// pages
import RootLayout from "./pages/Root";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Buy from "./pages/Buy";
import Rent from "./pages/Rent";
import Sell from "./pages/Sell";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import ErrorPage from "./pages/ErrorPage";
import ListingDetails from "./pages/ListingDetails";
import Analytics from "./pages/Analytics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/buy", element: <Buy /> },
      { path: "/rent", element: <Rent /> },
      { path: "/sell", element: <Sell /> },
      { path: "/contact", element: <Contact /> },
      { path: "/about-us", element: <AboutUs /> },
      { path: "/blog", element: <Blog /> },
      { path: "/admin", element: <Admin /> },
      {path: "/listing/:Lsid", element: <ListingDetails />},
      {path: "/analytics", element: <Analytics />}
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
