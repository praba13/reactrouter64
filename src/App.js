import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';

//Layout
import HelpLayout from './layouts/HelpLayout';
import RootLayout from './layouts/RootLayout';
import CareersLayout from './layouts/CareersLayout';

//Pages
import About from './pages/About';
import Home from './pages/Home';
import Faq from './pages/help/Faq';
import Contact, { contactAction } from './pages/help/Contact';
import NotFound from './pages/NotFound';
import Careers, { careersLoader } from './pages/careers/Careers';
import CareerDetails, {
  CareerDetailsLoader
} from './pages/careers/CareerDetails';
import CareersError from './pages/careers/CareersError';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='help' element={<HelpLayout />}>
        <Route path='faq' element={<Faq />} />
        <Route
          path='contact'
          element={<Contact action={contactAction} />}
        />{' '}
        {/*help/contact */}
      </Route>
      <Route
        path='careers'
        element={<CareersLayout />}
        errorElement={<CareersError />}
      >
        <Route index element={<Careers />} loader={careersLoader} />
        <Route
          path=':id'
          element={<CareerDetails />}
          loader={CareerDetailsLoader}
        />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
