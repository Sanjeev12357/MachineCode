import React, { useState } from 'react'
import Body from './components/Body'
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

const App = () => {
  const [lang,setLang]=useState('en');
  return (
    <div className=''>
    <header
     className='bg-gray-800 py-5  text-center p-4 font-bold text-2xl flex'
    >
    <nav className='p-2 text-white gap-2 m-2 flex w-96 justify-between text-lg'>
      <a href='/'>Home</a>
      <a href='/about'>About</a>
      <a href='/team'>Team</a>
      <a href='/login'>Login</a>
    </nav>
    <select value={lang} onChange={(e)=>setLang(e.target.value)}>
      <option value="en">
      English
      </option>
      <option value="hi">
      Hindi
      </option>
      <option value="sp">
      Spanish
      </option>
      <option value="ru">
      Russian
      </option>
    </select>
    </header>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About lang={lang}/>}></Route>
    </Routes>
   </BrowserRouter>
    </div>
  )
}

export default App