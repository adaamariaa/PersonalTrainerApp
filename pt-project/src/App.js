import './App.css';
import CustomerList from './components/CustomerList';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
  } from "react-router-dom";
import TrainingList from './components/TrainingList';
function App() {
  return (
<div className="App">
      <header className='header'>Welcome personal trainer app</header>
      <BrowserRouter>
        <Link to="/">Customers</Link>{' '}
        <Link to="/trainings">Trainings</Link>{' '}
        <Routes>
          <Route exact path="/" element={<CustomerList />} />
          <Route path="/trainings" element={<TrainingList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
