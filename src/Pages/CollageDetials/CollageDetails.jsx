import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import LoadingSpiner from "../../components/LoadingSpiner";

const CollageDetails = () => {
  const id = useParams().id;
  const [loading, setLoading] = useState(true);
  const [collage, setCollage] = useState([]);
  useEffect(() => {
    setLoading(true);
    fetch(`https://collage-nest-server.vercel.app/collages/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCollage(data);
        setLoading(false);
      });
  }, [id]);
  console.log(collage)

  if (loading) {
    <LoadingSpiner />;
  }
  return (
    <div className="mt-12 ">
          <div
            className="card card-compact w-full bg-base-100 text-2xl "
          >
            <figure>
              <img
                className="w-full h-[450px]"
                src={collage?.collegeImage}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-3xl">{collage?.collegeName}</h2>
              <p>
                Admission Date:{" "}
                {collage?.admissionDates?.fall +
                  " to " +
                  collage?.admissionDates?.spring}
              </p>
              <p>Rating: {collage?.rating?collage.rating:"Don't have rating"}</p>
              <div className="flex justify-between">
                <div>
                  <h4 className="text-2xl font-bold">Events</h4>
                  {collage?.events?.map((event, i) => (
                    <li key={i}>{event}</li>
                  ))}
                </div>
                <div className="mr-16">
                    <h4 className="text-2xl font-bold">Sports</h4>
                    {
                        collage?.sports?.map((sport,i)=><li key={i}>{sport}</li>)
                    }
                </div>
              </div>
              <p><span className=" font-semibold">Admission Process:</span> {collage?.admissionProcess}</p>
              <p> <span className="font-semibold">Research History: </span>{collage.researchHistory}</p>
            </div>
          </div>
    </div>
  );
};

export default CollageDetails;
