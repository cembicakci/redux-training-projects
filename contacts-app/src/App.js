import './App.css';
import Contacts from './components/Contacts';
import Edit from './components/Contacts/Edit';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div id='container'>
        <Router>

          <Routes>
            <Route path='/' element={<Contacts />} />
            <Route path='/edit/:id' element={<Edit />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
