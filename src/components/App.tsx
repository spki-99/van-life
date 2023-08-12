import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Vans from '../pages/Vans';
import GlobalStyles from './styles/GlobalStyles';

import '../server'

export default function App() {
    return (
        <BrowserRouter>
        <GlobalStyles />
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/vans' element={<Vans />}/>
            </Routes>
        </BrowserRouter>
    )
}