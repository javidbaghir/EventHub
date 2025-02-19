import Home from "../pages/Home";
import About from "../pages/About";
import CreateEvent from "../pages/CreateEvent";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import EventDetails from "../pages/EventDetails";
import ContactUs from "../pages/ContactUs";
import AppLayout from "../layouts/AppLayout";
import AuthLayout from "../layouts/AuthLayout";
import AuthProvider from "../provider/AuthProvider";
import { GlobalContextProvider } from "../context/GlobalContext";
import Search from "../pages/Search";
import Company from "../components/Company";
import { ScrollRestoration } from "react-router-dom";

const routes = [
  {
    path: "/",
    label: "Ana Səhifə",
    element: <Home />,
    isMenu: true,
    layout: AppLayout,
  },
  {
    path: "/about",
    label: "Haqqımızda",
    element: <About />,
    isMenu: true,
    layout: AppLayout,
  },
  {
    path: "/contactUs",
    label: "Əlaqə",
    element: <ContactUs />,
    isMenu: true,
    layout: AppLayout,
  },
  {
    path: "/createEvent",
    label: "Öz Tədbirini Yarat",
    element: <CreateEvent />,
    isMenu: true,
    isAuth: true,
    layout: AppLayout,
  },
  {
    path: "/company/:slug",
    element: <Company />,
    layout: AppLayout,
  },
  {
    path: "/search",
    element: <Search />,
    layout: AppLayout,
  },
  {
    path: "/eventDetails/:id",
    element: <EventDetails />,
    layout: AppLayout,
  },
  {
    path: "/login",
    element: <Login />,
    layout: AuthLayout,
  },
  {
    path: "/register",
    element: <Register />,
    layout: AuthLayout,
  },
  {
    path: "*",
    element: <NotFound />,
    layout: AppLayout,
  },
];

export const getMenus = () => routes.filter((i) => i.isMenu);

const createRouter = (routes) => {
  return routes.map((router) => {
    if (router.layout) {
      const Layout = router.layout;
      router.element = <Layout>
         <ScrollRestoration />
        {router.element}
        </Layout>;
    }

    if (router.isAuth)
      router.element = <AuthProvider>{router.element}</AuthProvider>;

    router.element = (
      <GlobalContextProvider>{router.element}</GlobalContextProvider>
    );

    return router;
  });
};

export default createRouter(routes);
