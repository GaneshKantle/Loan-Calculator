// src/components/Header.js
import { AppBar, Toolbar, Typography, Switch } from '@mui/material';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Header = () => {
  const { themeMode, setThemeMode } = useContext(AppContext);
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>Loan Calculator</Typography>
        <Switch
          checked={themeMode === 'dark'}
          onChange={() => setThemeMode(prev => prev === 'light' ? 'dark' : 'light')}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
