import { Link } from "react-router-dom";
import logo from "../../../../../assets/logo.svg"

const NavBar = () => {
    const navItems = <>
        <li><Link to="/">Home</Link></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
    </>
    return (
        <div className="navbar mb-12 mt-6 bg-base-100 max-w-[1140px] mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="mr-4 btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn normal-case border-[#FF3811] text-[#FF3811] bg-white ">Appointment</a>
            </div>
        </div>
    );
};

export default NavBar;