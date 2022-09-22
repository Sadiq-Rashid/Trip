import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import {Trips} from "./components/Trips/Trips"
import {Create} from "./components/Trips/Create";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },

  {
    path: '/fetch-trips',
    element: <Trips />
  },

  {
    path: '/create-trip',
    element: <Create />
  }
  
];

export default AppRoutes;
