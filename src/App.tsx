import './app.css'
import HomePage from "./pages/home/HomePage.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/login/LoginPage.tsx";

export default function App() {
 return (
     <BrowserRouter>
         <Routes>
             <Route path='/' element={<HomePage />} />
             <Route path='/login' element={<LoginPage/>} />
         </Routes>
     </BrowserRouter>
  )
}
