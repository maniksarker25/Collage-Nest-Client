// import logo from "../assets/logo/carToyExpress.png";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black mt-20 ">
      <footer className="footer max-w-screen-xl text-white mx-auto px-10 pt-20 pb-6s  ">
        <div className="-mt-8">
          {/* <img className="w-32 h-32" src={logo} alt="" /> */}
          <p className="text-2xl">
            CollageNest
            <br />
            Best Platform For Collage Apply
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Applying</a>
          <a className="link link-hover">Research</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Collage</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Cars</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div>
          <p className="footer-title">CONTACT</p>
          <input
            className="rounded-lg ps-2 py-2 text-black"
            type="email"
            placeholder="Your Email Address"
            required
          />
          <button className=" primary-btn mt-2 rounded-lg ">
            Subscribe Now
          </button>
          <div className="flex gap-4 mt-4">
            <FaFacebook className="w-6 h-6 cursor-pointer" />
            <FaInstagram className="w-6 h-6 cursor-pointer" />
            <FaGithub className="w-6 h-6 cursor-pointer" />
          </div>
        </div>
      </footer>
      <div className="text-white text-center pt-8  pb-20">
        <hr className="max-w-screen-md mx-auto mb-4" />
        Copyright © 2023 - All right reserved by CollageNest
      </div>
    </div>
  );
};

export default Footer;
