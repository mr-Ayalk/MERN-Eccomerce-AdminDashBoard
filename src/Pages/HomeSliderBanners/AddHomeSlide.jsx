import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Rating from "@mui/material/Rating";
import UploadBox from "../../Components/UploadBox/UploadBox";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { IoMdClose } from "react-icons/io";
import { Button } from "@mui/material";
import { FaCloudUploadAlt } from "react-icons/fa";
const AddHomeSlide = () => {
  const [productCat, setProductCat] = useState("");
  const [productSubCat, setProductSubCat] = useState("");
  const [productFeature, setProductSubFeature] = useState("");
  const [productRAM, setProductRAM] = useState("");
  const [productWeight, setProductWeight] = useState("");
  const [productSize, setProductSize] = useState("");
  const handleChangeProductSize = (event) => {
    setProductSize(event.target.value);
  };
  const handleChangeProductWeight = (event) => {
    setProductWeight(event.target.value);
  };
  const handleChangeProductRAM = (event) => {
    setProductRAM(event.target.value);
  };
  const handleChangeProductFeature = (event) => {
    setProductSubFeature(event.target.value);
  };
  const handleChangeProductSubCat = (event) => {
    setProductSubCat(event.target.value);
  };
  const handleChangeProductCat = (event) => {
    setProductCat(event.target.value);
  };
  return (
    <section className="p-5 px-20 bg-gray-50  overflow-hidden">
      <form action="" className="form p-8 py-3 ">
        <div className="scroll max-h-[75vh] overflow-y-scroll pr-4 pt-3">
          <div className="grid grid-cols-6 gap-4">
            <div className="uploadBoxWrapper relative">
              <span className="absolute w-[20px] h-[20px] rounded-full overflow-hidden bg-red-700 -top-[5px] -right-[5px] flex items-center justify-center z-50 cursor-pointer">
                <IoMdClose className="text-white text-[17px]" />
              </span>

              <div className="uploadBox p-0  rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] h-[150px] w-[170px] bg-gray-100 cursor-pointer hover:bg-gray-200 flex items-center justify-center flex-col relative">
                <LazyLoadImage
                  className="w-full h-full object-cover"
                  alt={"image.alt"}
                  effect="blur"
                  wrapperProps={{
                    // If you need to, you can tweak the effect transition using the wrapper style.
                    style: { transitionDelay: "1s" },
                  }}
                  src={
                    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww"
                  }
                />
              </div>
            </div>
            <UploadBox multiple={true} />
          </div>

          <br />
        </div>

        <br />
        <div className="w-[250px]">
          <Button type="button" className="btn-blue btn-lg w-full flex gap-2">
            <FaCloudUploadAlt className="text-[25px] text-white" />
            Publish and View
          </Button>
        </div>
      </form>
    </section>
  );
};

export default AddHomeSlide;
