import './App.css';
import { Route, Routes, useRoutes } from 'react-router-dom';
import Form from './components/Login';
import { Home } from './components';
function App() {
  let routes = useRoutes([
    { path: '/', element: <Form /> },
    { path: '/Home', element: <Home /> },
    // ...
  ]);
  return routes;
}

export default App;
