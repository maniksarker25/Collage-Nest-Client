

const GalarySection = () => {
  return (
    <div className="mt-20 w-full">
      <h1 className="text-center text-4xl font-semibold">Our Gallery</h1>
      <p className="text-center w-full my-8">
      Welcome to our College Image Gallery! Here you can immerse yourself in the vibrant campus life and get a glimpse of the memorable experiences that await you at CollageNest. Our campus is a hub of activity, fostering a diverse and inclusive community where lifelong friendships are formed and dreams are nurtured. Take a virtual tour through our gallery and witness the essence of life at our esteemed institution.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-4">
        <div>
          <img
            className="w-full h-[430px] rounded-md p-3 lg:p-0"
            src="https://i.ibb.co/GMCcZdL/1912-Vin-Uni-Campus-800x533.jpg"
            alt=""
          />
        </div>
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-2">
          <div>
            <img
              className="w-full  h-56 rounded-md p-3 lg:p-0"
              src="https://i.ibb.co/8rC8BMw/download-5.jpg"
              alt=""
            />
          </div>
          <div  >
            <img
              className="w-full h-56 rounded-md p-3 lg:p-0"
              src="https://i.ibb.co/vZtMKhg/download-6.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full h-48 rounded-md p-3 lg:p-0"
              src="https://i.ibb.co/vLg7tY9/download-7.jpg"
              alt=""
            />
          </div>
          <div  >
            <img
              className="w-full h-48 rounded-md p-3 lg:p-0"
              src="https://i.ibb.co/Ny4FM0q/5d373c7f100a244661598bb3.webp"
              alt=""
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 p-3 lg:p-0">
          <div>
            <img className="h-56 w-full" src="https://i.ibb.co/bNh8tHZ/download-8.jpg" alt="" />
          </div>
          <div>
            <img className="h-56 w-full" src="https://i.ibb.co/DMtsfpf/download-9.jpg" alt="" />
          </div>
          <div >
            <img className="h-56 w-full" src="https://i.ibb.co/vHTCRKP/download-10.jpg" alt="" />
          </div>
          <div>
            <img className="h-56 w-full" src="https://i.ibb.co/YyvB7fc/download-11.jpg" alt="" />
          </div>
        </div>
        <div>
          <img
            className="w-full h-[460px] rounded-md p-3 lg:p-0"
            src="https://i.ibb.co/Xt80bqt/download-12.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default GalarySection;
