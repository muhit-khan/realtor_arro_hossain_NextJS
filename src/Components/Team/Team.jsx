"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { RiArrowLeftLine, RiArrowRightLine } from 'react-icons/ri';
import styles from './Team.module.css';
import img1 from '../../Assets/user-1.png';
import img2 from '../../Assets/user-2.png';
import img3 from '../../Assets/user-3.png';
import img4 from '../../Assets/user-4.png';
import img5 from '../../Assets/user-1.png';

const images = [
    { src: img1, title: "Team Member 1", subtitle: "Position 1" },
    { src: img2, title: "Team Member 2", subtitle: "Position 2" },
    { src: img3, title: "Team Member 3", subtitle: "Position 3" },
    { src: img4, title: "Team Member 4", subtitle: "Position 4" },
    { src: img5, title: "Team Member 5", subtitle: "Position 5" }
];

const Team = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        // <div className={styles.team}>
        <div className='bg-blue-950'>
            <div className='container mx-auto px-4 py-10'>
                <h2 className='text-4xl font-bold text-center text-amber-500 mb-8'>The Faces Behind Arro Realty</h2>
                <p className='text-center text-lg text-gray-50 mb-10'>We take pride in our diverse and talented team of real estate agents who are dedicated to serving the Canadian housing market. Each member of our team brings unique insights and a commitment to delivering outstanding results. Get to know the professionals who will work tirelessly to make your real estate dreams a reality.</p>
                <div className='relative w-full overflow-hidden'>
                    <div className='relative flex items-center justify-center h-96 mt-10 mb-20'>
                        <button
                            onClick={goToPrevious}
                            className='p-2 bg-amber-500 bg-opacity-50 text-white rounded-full hover:bg-amber-600 active:bg-amber-500 z-10 absolute left-0'
                        >
                            <RiArrowLeftLine />
                        </button>
                        <div className='flex space-x-4'>
                            {images.map((image, index) => {
                                const isCurrent = index === currentIndex;
                                const isPrev = index === (currentIndex === 0 ? images.length - 1 : currentIndex - 1);
                                const isNext = index === (currentIndex === images.length - 1 ? 0 : currentIndex + 1);
                                const isTwoPrev = index === (currentIndex <= 1 ? images.length - (2 - currentIndex) : currentIndex - 2);
                                const isTwoNext = index === (currentIndex >= images.length - 2 ? currentIndex - (images.length - 2) : currentIndex + 2);

                                let cardClass = 'opacity-0 transform scale-75';
                                if (isCurrent) {
                                    cardClass = 'opacity-100 transform scale-100 z-10';
                                } else if (isPrev || isNext || isTwoPrev || isTwoNext) {
                                    cardClass = 'opacity-90 transform scale-90';
                                }

                                return (
                                    <div
                                        key={index}
                                        className={`relative transition-all duration-500 ease-in-out ${cardClass}`}
                                        style={{ width: isCurrent ? '350px' : '200px' }}
                                    >
                                        <div className='relative h-56 md:h-80'>
                                            <Image
                                                src={image.src}
                                                alt={`Carousel Image ${index + 1}`}
                                                layout="fill"
                                                objectFit="cover"
                                                className="rounded-lg"
                                            />
                                        </div>
                                        <div className='bg-white p-4 rounded-lg shadow-lg text-center'>
                                            <h3 className='text-xl text-gray-800 font-bold'>{image.title}</h3>
                                            <p className='text-gray-600'>{image.subtitle}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <button
                            onClick={goToNext}
                            className='p-2 bg-amber-500 bg-opacity-50 text-white rounded-full hover:bg-amber-600 active:bg-amber-500 z-10 absolute right-0'
                        >
                            <RiArrowRightLine />
                        </button>
                    </div>
                    <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10'>
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-amber-600' : 'bg-amber-400'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;

