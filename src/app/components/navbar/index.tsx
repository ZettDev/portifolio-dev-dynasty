import { useState } from 'react';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import logo from "../../../assets/logo.png"

export function Navbar() {
    const Links = [
        { name: "Sobre", link: "/" },
        { name: "Habilidades", link: "/" },
        { name: "Projetos", link: "/" },
        { name: "Equipe", link: "/" },
        { name: "Contato", link: "/"},
        { name: "Login", link: "/"}
    ];

    const [open, setOpen] = useState(false);

    return (
        <nav className='shadow-md w-full fixed top-0 left-0 font-viet'>
            <div className='lg:flex items-center justify-between bg-china-black py-6 px-8'>
                {/* logo section */}

                <div className='cursor-pointer'>
                    <img src={logo} alt="Logo Dev Dynasty"/>

                </div>

                <div onClick={() => setOpen(!open)}
                     className='absolute right-8 top-6 cursor-pointer lg:hidden w-12 h-12 '>
                    {
                        open ? <XMarkIcon color="white" height={48}/> : <Bars3Icon color="white" height={48}/>
                    }
                </div>
                {/* link items */}
                <ul className={`lg:flex lg:items-center lg:pb-0 pb-6 absolute max-lg:my-12 lg:static bg-china-black lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in-out ${open ? 'top-12' : 'top-[-490px]'}`}>
                    {
                        Links.map((link) => (
                            <li className='lg:ml-8 max-lg:my-6  font-extralight text-2xl'>
                                <Link to={link.link}
                                      className='text-white hover:text-yellow-400 duration-500'>{link.name}</Link>
                            </li>))
                    }

                </ul>


                <button
                    className='btn bg-black text-topaz lg:ml-8 font-light text-2xl rounded-2xl duration-500 lg:static max-lg:hidden py-2 px-6 hover:text-white'>
                    <Link to={'/old'}>
                    Contato
                    </Link>
                </button>

                <button
                    className='btn bg-black text-topaz lg:ml-8 font-light text-2xl rounded-2xl duration-500 lg:static max-lg:hidden py-2 px-6 hover:text-white'>
                    <Link to={'/old'}>
                        Login
                    </Link>
                </button>
            </div>
        </nav>
    );
}
