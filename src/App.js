import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './Component/Login';
import EmployeeForm from './Component/Employee';
import ShowData from './Component/ShowData';
import Careem from './Component/Careem';
import RideTable from './Component/RideTable';
import Ticketbooking from './Component/Ticketbooking';
import ShowTicket from './Component/ShowTicket';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<Ticketbooking />} />
        <Route path='/ticket' element={<ShowTicket/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
