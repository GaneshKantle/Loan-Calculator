
// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ErrorPage from './pages/ErrorPage';
import { CssBaseline } from '@mui/material';
import { useContext } from 'react';
import { AppContext } from './context/AppContext';

function AppContent() {
  const { themeMode } = useContext(AppContext);
  const theme = createTheme({ palette: { mode: themeMode } });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}