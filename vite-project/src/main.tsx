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
import Reviews from './help/Reviews.tsx'
import Support from './help/Support.tsx'
import Search from './selection/Search.tsx'
import Like from './selection/Like.tsx'
import Profile from './profile/Profile.tsx'
import Admin from './roles/Admin.tsx'

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
    path: '/Search',
    element: (
        <Search/>
    ),
  },
  {
    path: '/Like',
    element: (
        <Like/>
    ),
  },
  {
      path: '/Register',
      element: (
          <Register/>
      ),
  },
  {
    path: '/Reviews',
    element: (
        <Reviews/>
    ),
  },
  {
    path: '/Support',
    element: (
        <Support/>
    ),
  },
  {
    path: '/Profile',
    element: (
        <Profile/>
    ),
  },
  {
    path: '/Admin',
    element: (
        <Admin/>
    ),
  },
]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
