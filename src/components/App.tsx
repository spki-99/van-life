import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import GlobalStyles from './styles/GlobalStyles';

export default function App() {
    return (
        <BrowserRouter>
        <GlobalStyles />
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
            </Routes>
        </BrowserRouter>
    )
}