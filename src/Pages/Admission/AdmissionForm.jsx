import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { authContext } from "../../Providers/AuthProvider";

const image_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AdmissionForm = () => {
  const { user } = useContext(authContext);
  const id = useParams().id;
  const [loading, setLoading] = useState(true);
  const [collage, setCollage] = useState([]);
  console.log(collage.number_of_research);
  const { register, handleSubmit, reset } = useForm();
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(image_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          // const {name,price,category,recipe} = data;
          // const newItem = {name,price:parseFloat(price),category,recipe,image:imgURL};
          const {
            candidateName,
            subject,
            email,
            phone,
            address,
            date_of_birth,
          } = data;
          const appliedCollage = {
            candidateName,
            subject,
            email,
            phone,
            address,
            date_of_birth,
            collageImage: collage.collegeImage,
            candidateImage: imgURL,
            collageName: collage.collegeName,
            events: collage.events,
            sports: collage.sports,
            researchHistory: collage.researchHistory,
            num_of_research: collage.number_of_research,
            collageId:id
          };
          // console.log(appliedCollage)
          fetch("https://collage-nest-server.vercel.app/appliedCollage", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(appliedCollage),
          })
            .then((res) => res.json())
            .then((data) => {
              // console.log('after posting new menu item', data.data)
              console.log(data);
              if (data.insertedId) {
                reset();
                Swal.fire({
                  position: "top-center",
                  icon: "success",
                  title: "Successfully Applied",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            });
        }
      });
  };

  useEffect(() => {
    setLoading(true);
    fetch(`https://collage-nest-server.vercel.app/collages/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCollage(data);
        setLoading(false);
      });
  }, [id]);
  console.log(collage);
  return (
    <div className="mt-12">
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-[#F6F6F6] p-8  w-10/12 mx-auto"
        >
          <div className="md:flex gap-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold text-xl">
                  Candidate Name*
                </span>
              </label>
              <input
                type="text"
                defaultValue={user?.displayName}
                placeholder="Candidate Name"
                {...register("candidateName", {
                  required: true,
                  maxLength: 120,
                })}
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold text-xl">
                  Subject*
                </span>
              </label>
              <input
                type="text"
                placeholder="Subject"
                {...register("subject", { required: true, maxLength: 120 })}
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="md:flex gap-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold text-xl">
                  Candidate Email*
                </span>
              </label>
              <input
                type="email"
                defaultValue={user?.email}
                placeholder="Candidate Email"
                {...register("email", { required: true, maxLength: 120 })}
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold text-xl">
                  Candidate Phone*
                </span>
              </label>
              <input
                type="number"
                placeholder="Phone Number"
                {...register("phone", { required: true, maxLength: 120 })}
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="md:flex gap-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold text-xl">
                  Address*
                </span>
              </label>
              <input
                type="text"
                placeholder="Address"
                {...register("address", { required: true, maxLength: 120 })}
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold text-xl">
                  Date of birth*
                </span>
              </label>
              <input
                type="date"
                placeholder="Phone Number"
                {...register("data_of_birth", {
                  required: true,
                  maxLength: 120,
                })}
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-xl font-semibold">
                Candidate Photo*
              </span>
            </label>
            <input
              type="file"
              {...register("image", { required: true })}
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </div>
          <button
            type="submit"
            className="primary-btn text-white flex items-center gap-2 font-bold px-8 py-3  rounded-md my-6 "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdmissionForm;
