import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Vans from '../pages/Vans';
import VanDetails from '../pages/VanDetails';
import GlobalStyles from './styles/GlobalStyles';
import Layout from './Layout';

import '../server'

export default function App() {
    return (
        <BrowserRouter>
        <GlobalStyles />
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/vans' element={<Vans />}/>
                    <Route path='/vans/:id' element={<VanDetails />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}