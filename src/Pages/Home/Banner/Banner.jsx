
import { Link } from 'react-router-dom';
import bannerImg from '../../../assets/banner/bannerImage.png'

const Banner = () => {
    return (
        <div className='mt-24 px-2 lg:flex gap-24'>
            <div className='lg:w-1/2 mt-10'>
                <h2 className='text-6xl font-semibold mb-3 '>Find Your Best Collage <br /> <span className='text-[#4293E5]'>From Here</span></h2>
                <p className='my-6'>Welcome to Our CollageNest Collage Apply Platform. Embrace Possibility, Choose Your Dream College, and Set Yourself on the Road to Achievement. Streamlined Applications, Expert Guidance, and a World of Possibilities Await. Transform Your Aspirations into Reality. </p>
                <Link><button className='primary-btn rounded-md text-white font-semibold mt-4'>More Details</button></Link>
            </div>
            <div>
                <img className='w-[500px]' src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;