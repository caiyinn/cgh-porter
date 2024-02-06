import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Navigate } from "react-router";
import Dashboard from './Pages/dashboard/Dashboard';
import Overview from './Pages/Overview';

const theme = createTheme({
  typography: {
    fontFamily: "Poppins"
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Overview />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
