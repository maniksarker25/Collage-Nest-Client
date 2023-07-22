import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TopCollage = () => {
  const [collages, setCollages] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/collages")
      .then((res) => res.json())
      .then((data) => setCollages(data));
  }, []);
  return (
    <div className="my-16">
      <h1 className="text-center text-4xl font-bold mb-12">Our Top Collages</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {collages.splice(0, 3).map((collage) => (
          <div
            key={collage._id}
            className="card card-compact w-full bg-base-100 "
          >
            <figure>
              <img
                className="w-full h-72"
                src={collage.collegeImage}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{collage?.collegeName}</h2>
              <p>
                Admission Date:{" "}
                {collage.admissionDates.fall +
                  " to " +
                  collage.admissionDates.spring}
              </p>
              <div className="flex justify-between">
                <div>
                  <h4 className="text-2xl font-bold">Events</h4>
                  {collage.events.map((event, i) => (
                    <li key={i}>{event}</li>
                  ))}
                </div>
                <div className="mr-16">
                    <h4 className="text-2xl font-bold">Sports</h4>
                    {
                        collage.sports.map((sport,i)=><li key={i}>{sport}</li>)
                    }
                </div>
              </div>
              <p> <span className="font-semibold">Research History: </span>{collage.researchHistory}</p>
              <div className="card-actions justify-end">
               <Link to={`/collages/${collage._id}`}> <button className="primary-btn">View Details</button></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCollage;
