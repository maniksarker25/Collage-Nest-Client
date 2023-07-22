import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Admission = () => {
    const [collages,setCollages] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/collages')
        .then(res=>res.json())
        .then(data=>setCollages(data))
    },[])
    return (
        <div className="mx-auto w-full md:w-2/3 lg-w-3/5 ">
            <h2 className="font-bold text-center text-3xl my-12">Apply Your Dream Collage</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {
                    collages.map(collage=><Link to={`admissionForm/${collage._id}`} key={console._id}><h4 className="text-2xl p-4 font-semibold border-2 border-black" key={collage._id}>{collage.collegeName}</h4></Link>)
                }
            </div>
        </div>
    );
};

export default Admission;