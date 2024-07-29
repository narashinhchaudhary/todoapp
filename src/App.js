import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";

import Index from './pages/Index';
import Business from './pages/Business';
import Social from './pages/Social';
import Important from './pages/Important';
import  './app.css';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      
    <Route exact path='/' element={ <> <Index/></> }></Route>
    <Route exact path='/Business' element={<> <Business/> </>}></Route>
    <Route exact path='/Social' element={<> <Social/> </>}></Route>
    <Route exact path='/Important' element={<> <Important/> </>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
