import logo from './resources/logo.svg';
import './App.css';
import {Nav} from "./Nav";
import {Outlet} from "react-router-dom";
import Footer from "./Footer";


function App() {
    return (
        <>
            <Nav></Nav>
            <main>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </>
    );
}

export default App;
