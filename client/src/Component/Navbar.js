
import { NavLink, useNavigate } from 'react-router-dom';
import UserProfile from './UserProfile';
import { useEffect, useState } from 'react';
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

    return (
        <nav className="bg-red-900  w-full  border-b border-black-800 dark:border-slate-600">
            <div className="max-w-screen-2xl flex flex-wrap  items-center justify-between mx-auto p-2">
                <a href="/" className="flex items-center -mt-10 ml-2 h-25 w-40">
                    <img src='\image\QueryQuest.png' className='object-scale-down w-full rounded-xl mt-5' alt='logo' />
                </a>
                {
                    Details !== null && data[0] !== undefined ? <>
                        <b>
                            <NavLink to="/pricing" className="block text-white-200 border-2  shadow-xl shadow-red-500 rounded md:bg-transparent text-xl  md:text-slate-700 md:p-0 md:dark:text-slate-300 px-2 py-2 mr-2" aria-current="page">
                                {data[0].ticket === "monthly" ? <h2 class=" text-sm tracking-widest mb-2  text-white font-bold">PRO
                                    <svg viewBox="0 0 16 16" fill="currentColor" height="10px" className='ml-8 -mt-4 text-yellow-600'>
                                        <path fillRule="evenodd" d="M8 16A8 8 0 108 0a8 8 0 000 16zm.252-12.932a.478.478 0 00-.682.195l-1.2 2.432-2.684.39a.478.478 0 00-.266.816l1.944 1.892-.46 2.674a.478.478 0 00.694.504L8 10.709l2.4 1.261a.478.478 0 00.694-.504l-.458-2.673L12.578 6.9a.479.479 0 00-.265-.815l-2.685-.39-1.2-2.432a.478.478 0 00-.176-.195z" />
                                    </svg>
                                </h2> : <h2 class="text-sm tracking-widest mb-2   text-white font-bold">BASIC</h2>}
                            </NavLink>
                        </b>
                    </> : ""
                }

                <div className="flex md:order-2">
                    {
                        Details === null ?
                            <button type="button" className="text-white  hover:bg-white-900  hover:bg-red-200 focus:ring-4 focus:outline-none border-white-900 border-4 hover:text-black font-medium rounded-lg text-sm px-4 py-2 text-center -mt-2 -ml-50 " onClick={changeRoute}>Get started</button> :
                            <UserProfile />
                    }
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 -mr-4" id="navbar-sticky">
                    <ul className="flex flex-col p-2 mt-3 mb-3 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8  md:border-0 md:bg-white dark:bg-red-800 -ml-2 md:dark:bg-red-900 dark:border-gray-700">
                        <li>
                            <NavLink to="/" className="block py-2 -ml-1 px-1 bg-red-900 rounded hover:text-slate-950 hover:font-bold hover:bg-slate-200 md:dark:text-slate-200" aria-current="page">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className="block py-2 -ml-1 px-1 bg-red-900 rounded hover:text-slate-950 hover:font-bold hover:bg-slate-200 md:dark:text-slate-200">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/services" className="block py-2 -ml-1 px-1 bg-red-900 rounded hover:text-slate-950 hover:font-bold hover:bg-slate-200 md:dark:text-slate-200">Services</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className="block py-2 -ml-1 px-1 bg-red-900 rounded hover:text-slate-950 hover:font-bold hover:bg-slate-200 md:dark:text-slate-200">Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to="/pricing" className="block py-2 -ml-1 px-1 bg-red-900 rounded hover:text-slate-950 hover:font-bold hover:bg-slate-200 md:dark:text-slate-200">Pricing</NavLink>
                        </li>
                        {
                            Details !== null ?
                                <><li>
                                    <NavLink to="/newQuery" className="block py-2 -ml-1 px-1 bg-red-900 rounded hover:text-slate-950 hover:font-bold hover:bg-slate-200 md:dark:text-slate-200">Ask Query</NavLink>
                                </li>
                                    <li>
                                        <NavLink to="/myQuery" className="block py-2 -ml-1 px-1 bg-red-900 rounded hover:text-slate-950 hover:font-bold hover:bg-slate-200 md:dark:text-slate-200">My Queries</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/allQuery" className="block py-2 -ml-1 px-1 bg-red-900 rounded hover:text-slate-950 hover:font-bold hover:bg-slate-200 md:dark:text-slate-200">All Queries</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/users" className="block py-2 -ml-1 px-1 bg-red-900 rounded hover:text-slate-950 hover:font-bold hover:bg-slate-200 md:dark:text-slate-200">Users</NavLink>
                                    </li>

                                </> : ""
                        }
                    </ul>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;