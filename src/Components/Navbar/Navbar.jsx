import Image from 'next/image';
import logo from '../../Assets/logo.png';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-50 shadow-md z-50">
            <div className="container mx-auto flex items-center justify-between py-1 px-10">
                <Image src={logo} alt="AH" className="w-44" />
                <ul className="flex items-center space-x-6">
                    <li className="hover:text-amber-500">Home</li>
                    <li className="hover:text-amber-500">About</li>
                    <li className="hover:text-amber-500">Services</li>
                    <li className="hover:text-amber-500">Contact</li>
                    <li>
                        <button className="bg-amber-500 text-gray-900 text-gray-100 py-2 px-6 rounded-full hover:bg-amber-600 active:bg-amber-500">
                            Find Properties
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
