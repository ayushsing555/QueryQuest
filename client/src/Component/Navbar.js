
import {NavLink, useNavigate} from 'react-router-dom';
import UserProfile from './UserProfile';
import {useEffect, useState} from 'react';
const Navbar = () => {
    const navigator = useNavigate();
    const [data, setData] = useState([]);
    const getUserDetail = async (Details) => {
        Details = JSON.parse(Details);
        const url = `http://localhost:8000/user/${Details.UserName}`;
        const res = await fetch(url);
        const data = await res.json();
        setData([data]);

    };
    const changeRoute = () => {
        navigator("/signup");
    };

    let Details = localStorage.getItem("Details");

    useEffect(() => {
        if (Details != null) {
            getUserDetail(Details);
        }
    }, []);
    const Logout = () => {
        localStorage.removeItem("Details");
    };
    return (
        <nav className="bg-transparent dark:bg-red-900   w-full z-20 top-0 left-0 border-b border-red-200 dark:border-red-600">
            <div className="max-w-screen-2xl flex flex-wrap  items-center justify-between mx-auto p-4">
                <a href="website" className="flex items-center">
                    <img src='\image\solutions-community-logo.png' className='object-scale-down h-15 w-20' height={10} alt='logo' />
                </a>
                <div className="flex md:order-2">
                    {
                        Details === null ?
                            <button type="button" className="text-red-900  hover:bg-red-900  hover:bg-white-200 focus:ring-4 focus:outline-none border-red-900 border-4 hover:text-white font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 " onClick={changeRoute}>Get started</button> :
                            <UserProfile />
                    }
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-red-800 md:dark:bg-red-900 dark:border-gray-700">
                        <li>
                            <NavLink to="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/service" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to="/pricing" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</NavLink>
                        </li>
                        {
                            Details !== null ?
                                <><li>
                                    <NavLink to="/newQuery" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Ask Query</NavLink>
                                </li>
                                    <li>
                                        <NavLink to="/myQuery" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">My Queries</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/allQuery" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">All Queries</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/users" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Users</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/analysis" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Analytic</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/signin" onClick={Logout} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Logout</NavLink>
                                    </li>
                                </> : ""
                        }
                    </ul>
                </div>
                {
                    Details !== null && data[0]!==undefined  ? <>
                        <b>
                            <NavLink to="/pricing" className="block py-2 pl-3 pr-4 text-black border-2 p-2  shadow-xl shadow-red-500 bg-blue-700 rounded md:bg-transparent text-xl  md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">{data[0].ticket}</NavLink>
                        </b>
                    </> : ""
                }

            </div>
        </nav>
    );
};

export default Navbar;