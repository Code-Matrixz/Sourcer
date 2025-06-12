
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Loader from './pages/Loader';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import { Test } from './pages/Test';
import Search from './pages/Search';
import SignIn from './pages/SignIn';


const App = () => {

    const [IsLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() =>{
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    } ,[]);

    return (
        <Router>
            <Routes>
                {IsLoading ? (<Route path="/" element={<Loader/>} />) : ( <Route path="/" element={<Home />} />)}
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<SignUp/>} />
                <Route path="/test" element={<Test/>} />
                <Route path="/search" element={<Search/>} />
                <Route path="/signin" element={<SignIn/>} />
            </Routes>
        </Router>
    );
}

export default App;