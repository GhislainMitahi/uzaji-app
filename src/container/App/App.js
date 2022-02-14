import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';
import AllProducts from '../../components/AllProducts/AllProducts';
import './App.css';


function App() {
//  const params = userParams() 
//  console.log(params)
    
    return ( 
        <div className = "App">
            <BrowserRouter>
                <Routes>
                    <Route path = "/" element={<Home/>}/>
                    <Route path = "/AllProducts" element={<AllProducts/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;