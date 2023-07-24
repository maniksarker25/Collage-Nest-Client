import { useContext, useEffect, useState } from "react";
import { authContext } from "../../Providers/AuthProvider";
import LoadingSpiner from "../../components/LoadingSpiner";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";


const ProfileInformation = () => {
  const { user } = useContext(authContext);
  const [myCollages, setMyCollages] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch(`https://collage-nest-server.vercel.app/myCollage?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyCollages(data);
        setLoading(false);
      });
  }, [user]);


  const handleDeleteCollage = (id)=>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
      
      fetch(`https://collage-nest-server.vercel.app/collage/${id}`,{
          method:'DELETE'
      })
      .then(res=>res.json())
      .then(data => {
          console.log(data)
          if(data.deletedCount > 0){
              Swal.fire(
                  'Deleted!',
                  'Your Collage has been deleted.',
                  'success'
                )
                const remaining = myCollages.filter(collage=>collage._id !== id);
                setMyCollages(remaining)
          }
      })
      }
    })
  }

  if (loading) {
    <LoadingSpiner />;
  }
  // console.log(myCollages)
  return (
    <div className="w-full md:w-2/3 lg:w-1/3 mx-auto border-2 border-blue-400 p-4 mt-8 ">
      <img className="rounded-full w-40 mx-auto" src={user?.photoURL} alt="" />
      <h3 className="text-center font-bold text-2xl">{user?.displayName}</h3>
      <p className="text-center font-bold">{user?.email}</p>
      <h3 className="text-2xl font-bold my-4">Applied Collages</h3>
      {
        myCollages.map(collage=><li className="flex gap-4 mb-4 items-center" key={collage._id}>{collage.collageName} <span onClick={()=>handleDeleteCollage(collage._id)} className="cursor-pointer"><FaTrashAlt/></span></li>)
      }
    </div>
  );
};

export default ProfileInformation;
