import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Vans, { loader as vansLoader } from '../pages/Vans/Vans';
import VanDetails from '../pages/Vans/VanDetails';
import GlobalStyles from './styles/GlobalStyles';
import Layout from './Layout';
import Dashboard from '../pages/Host/Dashboard';
import Income from '../pages/Host/Income';
import Reviews from '../pages/Host/Reviews';
import HostLayout from './HostLayout';
import HostVans from '../pages/Host/HostVans/HostVans';
import HostVanDetailsLayout from './HostVanDetailsLayout';
import HostVanDetails from '../pages/Host/HostVans/HostVansDetails/HostVanDetails';
import HostVanPricing from '../pages/Host/HostVans/HostVansDetails/HostVanPricing';
import HostVanPhotos from '../pages/Host/HostVans/HostVansDetails/HostVanPhotos';
import NotFound from '../pages/NotFound';
import ErrorMessage from './ErrorMessage';

import '../server'

export default function App() {
    const routes = createRoutesFromElements(
        <Route path='/' element={<Layout />}>
            <Route index element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='vans' loader={vansLoader} errorElement={<ErrorMessage/>} element={<Vans/>}/>
            <Route path='vans/:id' element={<VanDetails/>}/>
            <Route path='host' element={<HostLayout />}>
                <Route index element={<Dashboard />}/>
                <Route path='income' element={<Income/>}/>
                <Route path ='vans' element={<HostVans/>}/>
                <Route path ='vans/:id' element={<HostVanDetailsLayout/>}>
                    <Route index element={<HostVanDetails/>}/>
                    <Route path='pricing' element={<HostVanPricing/>}/>
                    <Route path='photos' element={<HostVanPhotos/>}/>
                </Route>
                <Route path='reviews' element={<Reviews/>}/>
            </Route>
            <Route path='*'element={<NotFound/>}/>
        </Route>
    );

    const router = createBrowserRouter(routes);

    return (
        <>
            <GlobalStyles />
            <RouterProvider router={router}/>
        </>

    )
}