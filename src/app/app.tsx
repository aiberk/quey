import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import styles from "./app.module.css";
import Nav from "components/organisms/nav";
import QueueComponent from "components/organisms/queue";
import RegistrationForm from "components/organisms/registrationForm";
import Skeleton from "components/organisms/skeleton";
import Home from "../pages/home";
import Queue from "../pages/queue";
import {
  BeakerIcon,
  BookmarkIcon,
  CakeIcon,
  ChevronDownIcon,
  CubeTransparentIcon,
  FilmIcon,
  PhoneXMarkIcon,
  LockClosedIcon,
  Bars3Icon,
  PencilIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="/register" element={<Queue />} />
      </Route>
    </>
  )
);

function App({ routes }) {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
