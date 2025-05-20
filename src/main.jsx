import AOS from 'aos';
import 'aos/dist/aos.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, createBrowserRouter, Routes, Route, RouterProvider } from 'react-router';
import '@fontsource/poppins';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/200.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/800.css';
import '@fontsource/poppins/900.css';
import Home from './routes/home.jsx';
import { Provider } from "@/components/ui/provider"
import { useEffect } from 'react';
const router = createBrowserRouter([
      {
        path: "",
        Component: Home
      },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)



useEffect(() => {
  AOS.init({
    duration: 800,
    once: true,
  });
}, []);
