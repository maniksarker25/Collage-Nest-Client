import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Collages = () => {
    const [collages,setCollages] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/collages')
        .then(res=>res.json())
        .then(data=>setCollages(data))
    },[])
    return (
        <div>
            <h1 className="text-center text-4xl font-bold my-12">Our All Collage Here</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    collages.map((collage)=><div key={collage?._id} className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img className="w-full h-56" src={collage?.collegeImage} alt="Shoes" /></figure>
                    <div className="card-body">
                      <h2 className="card-title">{collage?.collegeName}</h2>
                      <p>Admission Date: {collage?.admissionDates?.fall +  ' to '  + collage?.admissionDates?.spring}</p>
                      <p>Number Of Research: {collage?.number_of_research}</p>
                        <p>Rating: {collage?.rating?collage.rating:"Don't have rating"}</p>
                      <div className="card-actions justify-end">
                        <Link to={`/collages/${collage?._id}`}><button className="primary-btn">View Details</button></Link>
                      </div>
                    </div>
                  </div>)
                }
            </div>
        </div>
    );
};

export default Collages;