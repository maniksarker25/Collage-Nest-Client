import { useContext, useEffect, useState } from "react";
import { authContext } from "../../Providers/AuthProvider";
import LoadingSpiner from "../../components/LoadingSpiner";
import Swal from "sweetalert2";

const MyCollage = () => {
  const { user } = useContext(authContext);
  const [myCollages, setMyCollages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [collage, setCollage] = useState([]);

  const [isOpen, setIsOpen] = useState(false);
  const openModal = (collage) => {
    setCollage(collage);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  // handle rating 
  const handleRating = (event)=>{
    event.preventDefault();
    const form = event.target;
    const reviewDescription = form.reviewDescription.value;
    const rating = form.rating.value;
    const review = {reviewDescription:reviewDescription,rating:rating}
    console.log(review)
    fetch(`https://collage-nest-server.vercel.app/review/${collage?.collageId}`,{
      method:"PUT",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(review)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.modifiedCount > 0){
        Swal.fire("Rating Added Successfully", "success");
        setIsOpen(false)
      }
    })
  }

  useEffect(() => {
    setLoading(true);
    fetch(`https://collage-nest-server.vercel.app/myCollage?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyCollages(data);
        setLoading(false);
      });
  }, [user]);

  if (loading) {
    <LoadingSpiner />;
  }
  return (
    <div className="mt-32 md:16 mb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {myCollages.map((collage) => (
          <div
            key={collage?._id}
            className="card card-compact w-full bg-base-100 shadow-xl"
          >
            <figure>
              <img
                className="w-full h-56"
                src={collage?.collageImage}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{collage?.collageName}</h2>
              <p>Number Of Research: {collage?.num_of_research}</p>
              <div className="flex justify-between">
                <div>
                  <h4 className="text-xl font-bold">Events</h4>
                  {collage.events.map((event, i) => (
                    <li key={i}>{event}</li>
                  ))}
                </div>
                <div className="">
                    <h4 className="text-xl font-bold">Sports</h4>
                    {
                        collage.sports.map((sport,i)=><li key={i}>{sport}</li>)
                    }
                </div>
              </div>
              <div className="card-actions justify-end">
                <button
                  onClick={() => openModal(collage)}
                  className="primary-btn"
                >
                  Add Review
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {isOpen && (
        <div className="fixed inset-0  flex items-center justify-center z-30 shadow-xl">
          <div className="absolute px-8 md:px-16 bg-[#F3F3F3] lg:w-2/5 p-6 rounded-lg">
            <h2 className="text-2xl my-4 font-semibold">
              Add Review For {collage?.collageName}
            </h2>
            <form onSubmit={handleRating}>
              <textarea
                className="textarea w-full my-4 h-24 textarea-bordered"
                name="reviewDescription"
                required
                placeholder="Review Details"
              ></textarea>
              <div className="form-control w-full mb-4">
                <label className="label">
                  <span className="label-text font-semibold text-xl">
                    Rating*
                  </span>
                </label>
                <input
                  type="number"
                  placeholder="Rating"
                  min={1}
                  max={5}
                  name="rating"
                  required
                  className="input input-bordered w-full"
                />
              </div>

              <div className="flex justify-between">
                <input
                  className="primary-btn cursor-pointer px-4 py-2"
                  type="submit"
                  value="Submit"
                />
                <button
                  onClick={closeModal}
                  className="bg-gray-500 rounded-md font-semibold hover:bg-gray-700 text-white py-2 px-4"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCollage;
