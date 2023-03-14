import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Menu } from './components/Menu/Menu';
import { Home } from './components/Home/Home';
import { GetSelection } from './components/GetSelection'
import { GetGroup } from './components/GetGroup'
import { GetMatch } from './components/GetMatch'
import { GetSelectionPlayer } from './components/GetSelectionPlayer';



function App() {

  return (
    <HashRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/selection' element={<GetSelection />} />
        <Route path='/selection/:id' element={<GetSelectionPlayer />} />
        <Route path='/group' element={<GetGroup />} />
        <Route path='/match' element={<GetMatch />} />
        <Route path='*' element={<p> Not found</p>} />
      </Routes>
    </HashRouter>
  )

}

export default App;
