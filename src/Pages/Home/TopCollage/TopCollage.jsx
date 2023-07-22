import { useEffect, useState } from "react";


const TopCollage = () => {
    const [collages,setCollages] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/collages')
        .then(res=>res.json())
        .then(data=>setCollages(data))
    },[])
    return (
        <div className="my-16">
            <h1 className="text-center text-4xl font-bold mb-12">Our Top Collages</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    collages.splice(0,3).map((collage)=><div key={collage._id} className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img className="w-full h-56" src={collage.collegeImage} alt="Shoes" /></figure>
                    <div className="card-body">
                      <h2 className="card-title">{collage?.collegeName}</h2>
                      <p>Admission Date: {collage.admissionDates.fall +  ' to '  + collage.admissionDates.spring}</p>
                      
                      <div className="card-actions justify-end">
                        <button className="primary-btn">View Details</button>
                      </div>
                    </div>
                  </div>)
                }
            </div>
        </div>
    );
};

export default TopCollage;