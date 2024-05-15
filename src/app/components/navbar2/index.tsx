import { Link } from "react-router-dom";
import logo from "../../../assets/image 15.png"
import { Heart, MagnifyingGlass, ShoppingBag, UserCircle, WhatsappLogo } from "@phosphor-icons/react";


export function NavBar2() {
    return (
        <>
            <nav className='shadow-md w-full fixed top-0 left-0'>
                <div className='md:flex items-center justify-between bg-white py-4 md:px-20 px-7'>
                    {/* Logo */}
                    <div className="py-4 px-10 w-[25%]">
                        <button>
                            <img src={logo} alt="Logo" className="md:h-16 h-12" />
                            <Link to={'/'} />
                        </button>
                    </div>

                    {/* Aba de Pesquisa */}
                    <div className="flex w-full justify-center gap-5">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="items-center md:w-[70%] justify-center border-2 border-gray-300 rounded-full p-3"    
                        />
                        <button type="submit">
                            <MagnifyingGlass size={32} />
                        </button>
                    </div>

                    {/* Icones */}
                    <div className="flex gap-5">
                        <a href="https://api.whatsapp.com/send?phone=551140722525&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20o%20nosso%20servi%C3%A7o!">
                            <WhatsappLogo size={32} />
                        </a>
                        <Link to={''}>
                            <Heart size={32} />
                        </Link>
                        <Link to={''}>
                            <UserCircle size={32} />
                        </Link>
                        <Link to={''}>
                            <ShoppingBag size={32} />
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}