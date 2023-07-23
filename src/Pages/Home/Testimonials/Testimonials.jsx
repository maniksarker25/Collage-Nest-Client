import { useEffect, useState } from "react";
import LoadingSpiner from "../../../components/LoadingSpiner";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Testimonials = () => {
  const [collages, setCollages] = useState([]);
  const [loding, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/collages")
      .then((res) => res.json())
      .then((data) => {
        setCollages(data);
        setLoading(false);
      });
  }, []);
  if (loding) {
    <LoadingSpiner />;
  }
  return (
    <div className="my-16">
      <h2 className="text-center font-bold text-4xl">Testimonial</h2>
      <h4 className="text-center font-semibold text-2xl mt-4">
        ---What Our Student Say---
      </h4>
      <div className="mt-8">
       
         <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {collages.map((collage) => (
            <SwiperSlide key={collage._id}>
              <div className="flex flex-col items-center w-8/12 mx-auto">
                <h4 className="text-2xl mb-2 font-semibold">{collage.collegeName}</h4>
                <Rating
                  className="mb-4"
                  style={{ maxWidth: 180 }}
                  value={collage?.rating?collage?.rating:""}
                  readOnly
                />
                <p className="text-center">{collage.reviewDescription?collage.reviewDescription:"Don't Have Review"}</p>
              </div>
            </SwiperSlide>
          ))}
      
    </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
