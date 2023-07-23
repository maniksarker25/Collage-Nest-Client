import Banner from "../Banner/Banner";
import GalarySection from "../GalarySection/GalarySection";
import Testimonials from "../Testimonials/Testimonials";
import TopCollage from "../TopCollage/TopCollage";


const Home = () => {
    return (
        <div>
            <Banner/>
            <TopCollage/>
            <GalarySection/>
            <Testimonials/>
        </div>
    );
};

export default Home;