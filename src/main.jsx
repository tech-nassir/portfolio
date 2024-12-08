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
import Basic from './routes/basic.jsx';
import Login from './routes/login.jsx';
import Register from './routes/register.jsx';
import Home from './routes/home.jsx';
import News from './routes/News.jsx';
import Forums from './routes/Forums.jsx';
import Faqs from './routes/faqs.jsx';
import About from './routes/about.jsx';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';


const router = createBrowserRouter([
  {
    Component: Basic,
    children: [
      {
        index: true,
        path: "",
        Component: Home
      },
      {
        path: "forums",
        Component: Forums
      },
      {
        path: "news",
        Component: News
      },
      {
        path: "FAQs",
        Component: Faqs
      },
      {
      path: "about us",
      Component: About
      },
    ],
  },
  {
    path: "login",
    Component: Login
  },
  {
    path: "register",
    Component: Register
  }
]);
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
)
