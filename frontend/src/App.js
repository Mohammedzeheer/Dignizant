import React from 'react';
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import Home from './components/home';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>      
        <Route path='/' element={<Home/>}> </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

