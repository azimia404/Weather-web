import {Link} from "react-router-dom";
import logo from "./resources/logo.svg";

function Footer(){
    return (
        <footer className="Bg-footer flex flex-col pt-[10%] px-[10%] pb-[5%]">
            <nav className="grid grid-cols-12">
                <ul className="col-span-3 flex gap-4 w-[10%]">
                    <li><a href="#"><i className="fa-brands fa-instagram text-white"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-facebook text-white"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-twitter text-white"></i></a></li>
                </ul>
                <div className="col-span-2 flex flex-col gap-4">
                    <header><h4 className="text-white font-medium text-2xl">Pages</h4></header>
                    <ul className="flex flex-col gap-4">
                        <li><Link className="text-xl text-accent-2" to="">Info</Link></li>
                        <li><Link className="text-xl text-accent-2" to="">Shop</Link></li>
                        <li><Link className="text-xl text-accent-2" to="">TOS</Link></li>
                    </ul>
                </div>
                <div className="col-span-2 flex flex-col gap-4">
                    <header><h4 className="text-white font-medium text-2xl">Platform</h4></header>
                    <ul className="flex flex-col gap-4">
                        <li><Link className="text-xl text-accent-2" to="">Android</Link></li>
                        <li><Link className="text-xl text-accent-2" to="">IOS</Link></li>
                        <li><Link className="text-xl text-accent-2" to="">Windows</Link></li>
                        <li><Link className="text-xl text-accent-2" to="">Mac OS</Link></li>
                    </ul>
                </div>
                <div className="col-span-2 flex flex-col gap-4">
                    <header><h4 className="text-white font-medium text-2xl">Support</h4></header>
                    <ul className="flex flex-col gap-4">
                        <li><Link className="text-xl text-accent-2" to="">Support request</Link></li>
                        <li><Link className="text-xl text-accent-2" to="">Contact Us</Link></li>
                    </ul>
                </div>
                <div className="col-span-2 flex flex-col gap-4 items-start pr-">
                    <header><h4 className="text-white font-medium text-2xl">Subscribe</h4></header>
                    <button className="rounded bg-accent-3 px-4 leading-[2em] flex gap-10 items-center justify-between text-base text-white font-medium"><span>Enter your email</span><i className="fa-solid fa-paper-plane"></i></button>
                    <p className="text-sm leading-2 text-accent-2">Join our newsletter to stay up to date on features and releases</p>
                </div>
            </nav>
            <div className="flex justify-between border-t border-accent-2 pt-6 mt-6">
                <Link className="flex align-middle"><img className="Nav-logo" src={logo}/></Link>
                <button className="Button-frame">Get it now</button>
            </div>
        </footer>
    )
}

export default Footer;