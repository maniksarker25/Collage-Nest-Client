import { useContext } from "react";
import { authContext } from "../../Providers/AuthProvider";



const SearchCollage = () => {
    // const [collage,setCollage] = useState([]);
    const {singleCollage} = useContext(authContext)
    console.log(singleCollage)
    
    return (
        <div>
           jdkjfdlkjlkdjlkfd 
        </div>
    );
};

export default SearchCollage;