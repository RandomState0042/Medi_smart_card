import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/header/Header';

import './components/header/Header.scss'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Header/>,
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
