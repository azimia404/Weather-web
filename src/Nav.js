import logo from './resources/logo.svg';
import search from './resources/search.svg';
import {Link} from "react-router-dom";

function Nav(){
    return (
        <nav className="flex justify-between px-12 py-3.5 bg-accent">
            <Link className="flex align-middle"><img className="Nav-logo" src={logo}/></Link>
            <div className="flex gap-4">
                <ul className="flex justify-between gap-4">
                    <li><Link className="block text-white w-12 text-base text-center underline-offset-4 decoration-2 hover:underline">Home</Link></li>
                    <li><Link className="block text-white w-12 text-base text-center underline-offset-4 decoration-2 hover:underline">Info</Link ></li>
                    <li><Link className="block text-white w-12 text-base text-center underline-offset-4 decoration-2 hover:underline">Shop</Link></li>
                    <li><Link className="block text-white w-12 text-base text-center underline-offset-4 decoration-2 hover:underline">TOS</Link></li>
                </ul>
                {/*DESIGNER! THIS SHOULD BE FONT-AWESOME ICON, NOT IMAGE FROM FIGMA.*/}
                <button><img src={search} className="src"/></button>
            </div>
        </nav>
    )
}

export {Nav};