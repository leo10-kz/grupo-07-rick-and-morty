import React from "react";
import { Routes, Route } from "react-router-dom";
import Searchbar  from './components/Searchbar/Searchbar.jsx';
import Characters from './components/Characters/Characters.jsx';
import Details from './components/Details/Details.jsx'



function App() {
  return (
    <div className="App">
      <Searchbar/>
      <Routes>
          <Route path='/'  element={<Characters/>}  />
          <Route path='/:DetailId' element={<Details/>}  />
          <Route />
      </Routes>
    </div>
  );
}

export default App;
