import React from 'react';
import Image from 'next/image';
import logo from '../../Assets/logo.png';
import { RiFacebookFill, RiInstagramFill, RiYoutubeFill, RiTwitterFill } from 'react-icons/ri';

const Footer = () => {
    return (
        <div className='w-full bg-black'>
            <div className='footer container mx-auto flex flex-col md:flex-row items-center justify-between p-6 text-white'>
                <div className='footer-col-1 flex flex-col items-start p-4'>
                    <Image src={logo} alt="logo" className='logo w-32 h-auto' />
                    <ul className='mt-4'>
                        <li className='flex items-center mb-2'>Phone: +1234567890</li>
                        <li className='flex items-center mb-2'>Email: arro.h@realtor.ca</li>
                        <li className='flex items-center mb-2'>Address: 1234 Street, City, US</li>
                    </ul>
                </div>
                <div className='footer-col-2 flex flex-col items-start p-4'>
                    <h3 className='text-lg font-semibold mb-2'>Quick Links</h3>
                    <ul>
                        <li className='mb-2'>Home</li>
                        <li className='mb-2'>About</li>
                        <li className='mb-2'>Service</li>
                        <li className='mb-2'>Contact</li>
                        <li className='mb-2'>Find Properties</li>
                    </ul>
                </div>
                <div className='footer-col-3 flex flex-col items-start p-4'>
                    <h3 className='text-lg font-semibold mb-2'>Follow Me</h3>
                    <ul>
                        <li className='flex items-center mb-2'><RiFacebookFill /> <span className='ml-2'>Facebook</span></li>
                        <li className='flex items-center mb-2'><RiInstagramFill /> <span className='ml-2'>Instagram</span></li>
                        <li className='flex items-center mb-2'><RiYoutubeFill /> <span className='ml-2'>Youtube</span></li>
                        <li className='flex items-center mb-2'><RiTwitterFill /> <span className='ml-2'>Twitter</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;
