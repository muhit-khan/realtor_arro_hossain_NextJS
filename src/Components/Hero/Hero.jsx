import Image from 'next/image';
import darkArrow from '../../Assets/dark-arrow.png';
import heroImage from '../../Assets/hero.png';
import styles from './Hero.module.css'

const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className="text-center max-w-2xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Unlock Your Dream Home!</h1>
                <p className="text-lg md:text-xl mb-6">
                    Let’s turn those house-hunting dreams into reality. Call me today, and together, we’ll find the perfect place to hang your heart.
                </p>
                <button className="btn bg-amber-500 text-gray-900 text-base py-2 px-6 rounded-full inline-flex items-center hover:bg-amber-600 active:bg-amber-500">
                    Explore <Image src={darkArrow} alt="" className="ml-2 w-4" />
                </button>
            </div>
        </div>
    );
};

export default Hero;
