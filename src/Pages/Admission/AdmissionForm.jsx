import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const AdmissionForm = () => {
    const id = useParams().id;
    const [loading, setLoading] = useState(true);
    const [collage, setCollage] = useState([]);
    useEffect(() => {
      setLoading(true);
      fetch(`http://localhost:5000/collages/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setCollage(data);
          setLoading(false);
        });
    }, [id]);
    console.log(collage)
    return (
        <div>
            <h1>Admission form</h1>
        </div>
    );
};

export default AdmissionForm;