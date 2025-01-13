import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.sass'
import App from './App.tsx'
import Trousers from './compW/Trousers.tsx'
import Tops from './compW/Tops.tsx'
import TrousersMen from './compM/TrousersMen.tsx'
import SweatshirtsW from './compW/SweatshirtsW.tsx'
import SweatshirtsM from './compM/SweatshirtsM.tsx'
import Leggings from './compW/Leggings.tsx'
import TShirt from './compM/TShirt.tsx'
import Shorts from './compM/Shorts.tsx'
import ME from './selection/Me.tsx'
import Register from './selection/Register.tsx'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router';


const router = createBrowserRouter([
  {
      path: '/',
      element: (
          <App/ >
      ),
  },
  {
      path: '/Trousers',
      element: (
          <Trousers/>
      ),
  },
  {
      path: '/Tops',
      element: (
          <Tops/>
      ),
  },
  {
      path: '/TrousersMen',
      element: (
          <TrousersMen/>
      ),
  },
  {
      path: '/SweatshirtsW',
      element: (
          <SweatshirtsW/>
      ),
  },
  {
      path: '/SweatshirtsM',
      element: (
          <SweatshirtsM/>
      ),
  },
  {
      path: '/Leggings',
      element: (
          <Leggings/>
      ),
  },
  {
      path: '/TShirt',
      element: (
          <TShirt/>
      ),
  },
  {
      path: '/Shorts',
      element: (
          <Shorts/>
      ),
  },
  {
      path: '/Me',
      element: (
          <ME/>
      ),
  },
  {
      path: '/Register',
      element: (
          <Register/>
      ),
  },
]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
