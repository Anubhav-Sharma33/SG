import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root";
import Homepage from "./Pages/Homepage";
import CityListing from "./Pages/City/CityListing";
import BuilderListing from "./Pages/Builder/BuilderListing";
import AboutUs from "./Pages/AboutUs";
import NewsListing from "./Pages/News/NewsListing";
import NewsDetails from "./Pages/News/NewsDetails";
import BlogListing from "./Pages/Blogs/BlogListing";
import BlogDetails from "./Pages/Blogs/BlogDetails";
import EventListing from "./Pages/Events/EventListing";
import EventDetails from "./Pages/Events/EventDetails";
import Awards from "./Pages/Awards";
import Advertisements from "./Pages/Advertisements";
import ContactUs from "./Pages/ContactUs";
import Careers from "./Pages/Careers";
import ProjectsListing from "./Pages/Projects/ProjectsListing";
import ProjectType from "./Pages/Projects/ProjectTypeListing";
import ProjectDetails from "./Pages/Projects/ProjectDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index:true,
        element: <Homepage />,
      },
      {
        path: "city/:cityName",
        element : <CityListing/>
      },
      {
        path: "builder/:builderName",
        element :<BuilderListing/>
      },
      {
        path:"projects",
        element:<ProjectsListing/>
      },
      {
        path:"projects/:projectType",
        element: <ProjectType/>
      },
      {
        path:"about-us",
        element:<AboutUs/>
      },
      {
        path:"news",
        element: <NewsListing/>
      },
      {
        path:"news/:newsName",
        element: <NewsDetails/>
      },
      {
        path:"blogs",
        element:<BlogListing/>
      },
      {
        path:"blogs/:blogName",
        element:<BlogDetails/>
      },
      {
        path:"events",
        element: <EventListing/>
      },
      {
        path:"events/:eventName",
        element:<EventDetails/>
      },
      {
        path:"awards",
        element:<Awards/>
      },
      {
        path:"advertisements",
        element:<Advertisements/>
      },
      {
        path:"contact-us",
        element:<ContactUs/>
      },
      {
        path:"careers",
        element:<Careers/>
      }
    ],
  },
  {
    path:":projectName",
    element:<ProjectDetails/>
  }
]);
//Setup a different route for all ProjectListingPage

function App() {
  return <RouterProvider router={router} />;
}

export default App;
