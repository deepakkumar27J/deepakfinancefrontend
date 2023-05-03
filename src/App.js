import './App.css';
import Appbar from './components/Appbar';
import { Routes, Route } from 'react-router-dom';
import {FinanceHome, Pay} from './components/Invoice';

function App() {
  return (
    <div className="App">
    <Appbar/>
    <Routes>
      <Route path='/' element={<FinanceHome/>}/>
      <Route path='/invoice' element={<Pay/>}/>
    </Routes>
    </div>
  );
}

export default App;
