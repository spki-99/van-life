import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Vans, { loader as vansLoader } from '../pages/Vans/Vans';
import VanDetails, { loader as vanDetailsLoader } from '../pages/Vans/VanDetails';
import GlobalStyles from './styles/GlobalStyles';
import Layout from './Layout';
import Dashboard from '../pages/Host/Dashboard';
import Income from '../pages/Host/Income';
import Reviews from '../pages/Host/Reviews';
import HostLayout from './HostLayout';
import HostVans, { loader as hostVansLoader } from '../pages/Host/HostVans/HostVans';
import HostVanDetailsLayout, { loader as hostVanDetailsLoader} from './HostVanDetailsLayout';
import HostVanDetails from '../pages/Host/HostVans/HostVansDetails/HostVanDetails';
import HostVanPricing from '../pages/Host/HostVans/HostVansDetails/HostVanPricing';
import HostVanPhotos from '../pages/Host/HostVans/HostVansDetails/HostVanPhotos';
import NotFound from '../pages/NotFound';
import ErrorMessage from './ErrorMessage';
import Login, { loader as loginLoader, action as loginAction } from '../pages/Login';
import { requireAuth } from '../utils/auth';

import '../server'

export default function App() {
    const routes = createRoutesFromElements(
        <Route path='/' element={<Layout />}>
            <Route index element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='vans' loader={vansLoader} errorElement={<ErrorMessage/>} element={<Vans/>}/>
            <Route path='vans/:id' loader={vanDetailsLoader} errorElement={<ErrorMessage/>} element={<VanDetails/>}/>
            <Route path='login' loader={loginLoader} action={loginAction} element={<Login/>}/>
            <Route path='host' element={<HostLayout />}>
                <Route 
                    index 
                    loader={async ({request}) => await requireAuth(request)}
                    element={<Dashboard />}/>
                <Route 
                    path='income'
                    loader={async ({request}) => await requireAuth(request)}
                    element={<Income/>}/>
                <Route 
                    path ='vans'
                    loader={hostVansLoader}
                    errorElement={<ErrorMessage/>}
                    element={<HostVans/>}/>
                <Route
                    path ='vans/:id'
                    loader={hostVanDetailsLoader}
                    errorElement={<ErrorMessage/>}
                    element={<HostVanDetailsLayout/>}>
                    <Route 
                        index
                        loader={async ({request}) => await requireAuth(request)}
                        element={<HostVanDetails/>}/>
                    <Route
                        path='pricing'
                        loader={async ({request}) => await requireAuth(request)}
                        element={<HostVanPricing/>}/>
                    <Route 
                        path='photos'
                        loader={async ({request}) => await requireAuth(request)}
                        element={<HostVanPhotos/>}/>
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