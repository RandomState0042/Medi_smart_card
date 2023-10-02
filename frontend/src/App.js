import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/header/Header';
import { Home } from './components/home/Home';

// style sheets
import './components/header/Header.scss'
import './components/home/Home.scss'
const router = createBrowserRouter([
  {
    path: "/",
    element: <><Header/><Home/></>,
  },
]);


function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
