import './App.css';
import CustomerList from './components/CustomerList';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
  } from "react-router-dom";
import TrainingList from './components/TrainingList';
import TrainingCalendar from './components/TrainingCalendar';
import StaticList from './components/Stats';
import { Toolbar, Typography } from '@mui/material';
import { AppBar } from '@mui/material';
import { Box } from "@mui/material";
import Button from '@mui/material/Button';



function App() {
  return (
<div className="App">
<Box sx={{ flexGrow: 1, border: '1px grey' }}>
        <Toolbar>
          <Typography variant="h6">
            Personal Training App
          </Typography>
        </Toolbar>
        <BrowserRouter>
        <Link to="/"><Button size="small" variant="text" color="secondary">Customers</Button></Link>{' '}
        <Link to="/trainings"><Button size="small" variant="text" color="secondary">Trainings</Button></Link>{' '}
        <Link to="/calendar"><Button size="small" variant="text" color="secondary">Calendar</Button></Link>
        <Link to="/stats"><Button size="small" variant="text" color="secondary">Stats</Button></Link>
        <Routes>
          <Route exact path="/" element={<CustomerList />} />
          <Route path="/trainings" element={<TrainingList />} />
          <Route path="/calendar" element={<TrainingCalendar/>}/>
          <Route path="/stats" element={<StaticList/>}/>
        </Routes>
      </BrowserRouter>
    </Box>
    </div>
  );
}

export default App;
